---
date: 2020-01-26 06:46:23
title: Working with Gatsby Images
description: Say goodbye to the difficulties to work with images in your web applications.
category: gatsby
featuredImage: ./images/gatsby-image.jpeg
---

Have you ever been in a situation where you entered a website, started to read the content and suddenly an image appeared on the screen and made you lost your focus on what you were reading? Or have you ever experienced a large, unoptimized image that dramatically slowed down the site?
\
\
Well, for a long, that was a huge problem, but with time, more modern optimized solutions were appearing that helped us a lot, but with some difficulties in the solution.
\
\
 E.g:
- Resize large images according to the design.
- Generate smaller images, so the mobile device doesn't download a desktop image.
- Hold the position of the image, so the text doesn't move on the screen when the image loads.
- Create placeholders or blur-ups effects during image load.
\
\
So Gatsby made it easier with gatsby-image! It really does everything you need, and to use it's really simple, you have to install the dependencies:

```
yarn add gatsby-image gatsby-transformer-sharp gatsby-plugin-sharp
```

In your `gatsby-config.js` you have to add the plugins, the transformers and tell Gatsby where are your images so we can query it with GraphQL:

```javascript
module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
```

Now that we already have a setup for our images, I combined the frontmatter information with gatsby-image by creating a markdown file with a field named featuredImage in frontmatter, and passed the relative path for the image:

```md
---
date: 2020-01-26 06:46:23
title: Gatsby - First challenge completed
description: So, this is the first challenge of the 100 days of gatsby, and I'm really excited to tell you what I learned, the difficulties and the next steps.
category: gatsby
featuredImage: ./images/100daysofgatsby.png
---

// markdown content right here
```

And now that GraphQL knows the existence of your images, we can query the markdown's frontmatter and get the featuredimage in our React component using the Image component provided by 'gatsby-image'

```jsx
import React from 'react';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import { Link, graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <>
      <SEO title="Home" />
      {posts.map(({ node }) => (
        <Img
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          alt="Featured image"
        />
      ))}
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }  
`;

export default IndexPage;

```
\
I have run the Audit on my website in production mode, and here is a report from the application performance!
\
\
![Audit performance for fabiotetsuo.com](./images/audit_performance_fabiotetsuocom.png)
\
\
And that's it! We have the gatsby-image configured, we can display the images with lazy load, we avoid some problems with an easy solution and we increased the application performance amazingly!
\
\
That's it folks, I see you in the next post!