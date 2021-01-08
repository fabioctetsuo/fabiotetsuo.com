import * as React from "react"
import styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import Container from "@material-ui/core/Container"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Me from "../../../components/Me"
import SocialNetwork from "../../../components/SocialNetwork"

const CustomFormControlLabel = styled(FormControlLabel)`
  &:first-child {
    margin: 0 16px 0 0;
  }
`

const ABOUT_ME_DICTONARY = {
  LITTLE: "LITTLE",
  MEDIUM: "MEDIUM",
  BIG: "BIG",
}

const ABOUT_ME_TEXT = {
  LITTLE:
    "Sou desenvolvedor, gosto de escrever, cozinheiro nas horas vagas e amante de gatos!",
  MEDIUM:
    "Eu trabalho na Raia Drogasil e escrevo sobre tecnologia e alguns outros assuntos diversos. Gosto de passar meu tempo cozinhando, cuidando da minha gatinha e aprendendo novas coisas!",
  BIG:
    "Eu trabalho na Raia Drogasil como desenvolvedor frontend e escrevo sobre tecnologia e alguns outros assuntos diversos para passar meu conhecimento adiante. Uma das minhas vontades é dar aula em algum momento. Gosto de passar meu tempo cozinhando, principalmente culinária italiana, cuido da minha gatinha chamada Phoebe (sim, homenagem a Friends) e gosto de aprender novas coisas todos os dias!",
}

function Presetation() {
  const [aboutMeOption, setAboutMeOption] = React.useState(
    ABOUT_ME_DICTONARY.MEDIUM
  )

  return (
    <Container>
      <Grid container spacing={3} style={{ marginTop: "72px" }}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography variant="h3" style={{ fontWeight: 300 }}>
              E aí, meu nome é
            </Typography>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>
              Tetsuo
            </Typography>
          </div>
          <div style={{ marginTop: "32px" }}>
            <FormControl>
              <FormLabel component="legend" style={{ margin: "0 0 8px 0" }}>
                Quanto você quer saber sobre mim?
              </FormLabel>
              <RadioGroup
                row
                aria-label="position"
                name="position"
                defaultValue={aboutMeOption}
                value={aboutMeOption}
                onChange={({ target: { value } }) => setAboutMeOption(value)}
              >
                <CustomFormControlLabel
                  value={ABOUT_ME_DICTONARY.LITTLE}
                  control={<Radio color="primary" />}
                  label="Um pouco"
                  labelPlacement="bottom"
                />
                <CustomFormControlLabel
                  value={ABOUT_ME_DICTONARY.MEDIUM}
                  control={<Radio color="primary" />}
                  label="Bastante"
                  labelPlacement="bottom"
                />
                <CustomFormControlLabel
                  value={ABOUT_ME_DICTONARY.BIG}
                  control={<Radio color="primary" />}
                  label="Muito mesmo"
                  labelPlacement="bottom"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div style={{ marginTop: "32px" }}>
            <Typography variant="body1">
              {ABOUT_ME_TEXT[aboutMeOption]}
            </Typography>
          </div>
          <div style={{ marginTop: "40px" }}>
            <SocialNetwork />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Me />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Presetation
