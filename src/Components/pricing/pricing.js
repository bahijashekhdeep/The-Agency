import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./pircing.css";
import ContactForm from "../RequestForm/request";

const tiers = [
  {
    title: "Prepaid",
    price: "0",
    period: "1 Week",
    description: [
      "20 users included",
      "eurfvb oiau efhpa w9fuap09",
      "eurfvb oiau efhpa w9fuap09",
      "areih paer apwhfa",
    ],
    buttonText: "Contact us",
    buttonVariant: "contained",
  },
  {
    title: "Prepaid",
    price: "15",
    period: "1 Week",
    description: [
      "20 users included",
      "eurfvb oiau efhpa w9fuap09",
      "eurfvb oiau efhpa w9fuap09",
      "areih paer apwhfa",
    ],
    buttonText: "Contact us",
    buttonVariant: "contained",
  },
  {
    title: "Prepaid",
    price: "15",
    period: "1 Week",
    description: [
      "20 users included",
      "eurfvb oiau efhpa w9fuap09",
      "eurfvb oiau efhpa w9fuap09",
      "areih paer apwhfa",
    ],
    buttonText: "Contact us",
    buttonVariant: "contained",
  },
  {
    title: "Prepaid",
    price: "15",
    period: "1 Week",
    description: [
      "20 users included",
      "eurfvb oiau efhpa w9fuap09",
      "eurfvb oiau efhpa w9fuap09",
      "areih paer apwhfa",
    ],
    buttonText: "Contact us",
    buttonVariant: "contained",
  },
  {
    title: "Prepaid",
    price: "15",
    period: "1 Week",
    description: [
      "20 users included",
      "eurfvb oiau efhpa w9fuap09",
      "eurfvb oiau efhpa w9fuap09",
      "areih paer apwhfa",
    ],
    buttonText: "Contact us",
    buttonVariant: "contained",
  },
  {
    title: "Prepaid",
    price: "15",
    period: "1 Week",
    description: [
      "20 users included",
      "eurfvb oiau efhpa w9fuap09",
      "eurfvb oiau efhpa w9fuap09",
      "areih paer apwhfa",
    ],
    buttonText: "Contact us",
    buttonVariant: "contained",
  },
];

const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          className="name"
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "32px",
            lineHeight: "29px",
          }}
        >
          Pricing
        </Typography>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "18px",
          }}
        >
          take a tour in our latest packages
        </Typography>
      </Container>

      <Container
        className="maim"
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{
          pt: 12,
          pb: 8,
        }}
      >
        <Slider
          dots={true}
          infinite={true}
          speed={1000} // change slide transition speed to 1 second
          slidesToShow={3} // show 2 slides at a time
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 900, // adjust as per your requirement
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 600, // adjust as per your requirement
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {tiers.map((tier, index) => (
            <div key={index}>
              <CardHeader
                className="header"
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
              />
              <CardHeader
                className="header2"
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                sx={{
                  fontFamily: "Inter",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "16px",
                }}
              />
              <Card
                sx={{
                  border: "2px solid #282828",
                  height: "377px",
                  width: "295px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  margin: "0 auto 0px",
                  backgroundColor: "#FAF8F8",
                }}
              >
                <CardContent>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="text.primary"
                      align="left"
                      sx={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "19px",
                        color: " #000000",
                      }}
                    >
                      Price:<span className="tier-price">${tier.price}</span>
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "19px",
                        color: " #000000",
                        marginLeft: "30px",
                      }}
                      component="h6"
                      variant="h6"
                      color="text.primary"
                      align="left"
                    >
                      Period: <span className="tier-price">${tier.price}</span>
                    </Typography>
                  </div>
                  <Typography
                    variant="body1"
                    align="left"
                    sx={{
                      mb: 5,
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "19px",
                      marginTop: "40px",
                      color: "#000000",
                      marginLeft: "15px",
                    }}
                  >
                    {tier.description.map((line) => (
                      <div className="description-line">{line}</div>
                    ))}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography
                    className="btne"
                    sx={{
                      height: "65px",
                      width: "115px",
                      margin: "0px auto 7px",
                      backgroundColor: "transparent",
                      boxShadow: "none",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 600,
                      fontSize: "13px",
                      lineHeight: "13px",
                      color: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    variant={tier.buttonVariant}
                  >
                    {/* {tier.buttonText} */}
                    <ContactForm />
                  </Typography>
                </CardActions>
              </Card>
            </div>
          ))}
        </Slider>
      </Container>
    </ThemeProvider>
  );
}
