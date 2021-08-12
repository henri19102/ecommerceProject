import React from "react";
import { Box, Grid, Paper } from "@material-ui/core";
import { useStyles } from "../../styles/styles";

const Registry = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.container}>
          <h2>Re­gis­ter desc­rip­tions</h2>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <p>
              Per­so­nal da­ta is col­lec­ted from per­sons who app­ly for
              ren­tal hou­sing from Tegridy­ Inc. The hou­sing app­li­cant
              re­gis­ter is used and the per­so­nal da­ta is pro­ces­sed wit­hin
              the li­mits per­mit­ted and re­qui­red by the Per­so­nal Da­ta Act
              for the ma­na­ge­ment, ad­mi­nist­ra­tion and de­ve­lop­ment of
              cus­to­mer re­la­tions­hips as well as for ana­ly­sis and
              sta­tis­tics. The cus­to­mer in­for­ma­tion con­tai­ned in the
              re­gis­ter can be used in con­nec­tion with hou­sing
              re­ser­va­tions and the comp­le­tion of a te­nan­cy ag­ree­ment,
              as well as for the mar­ke­ting car­ried out by the cont­rol­ler
              and com­pa­nies be­lon­ging to the sa­me group.
            </p>
            <h4>Stakeholder register</h4>
            <p>
              Per­so­nal da­ta is col­lec­ted from per­sons who comp­le­te a
              te­nan­cy ag­ree­ment with Tegridy­ Inc or who li­ve in an
              Tegridy­ ren­tal ho­me. The re­si­dent re­gis­ter is used and the
              per­so­nal da­ta wit­hin are pro­ces­sed wit­hin the li­mits
              per­mit­ted and re­qui­red by the Per­so­nal Da­ta Act for the
              ma­na­ge­ment, ad­mi­nist­ra­tion and de­ve­lop­ment of cus­to­mer
              re­la­tions­hips as well as for ana­ly­sis, sta­tis­tics, and
              ac­ti­vi­ties re­la­ting to re­si­dents’ de­moc­ra­cy. The
              per­so­nal da­ta of the in­ha­bi­tants may be used in the na­me
              tab­le for the stair­way, on the doors of the apart­ments, in the
              sau­na and wash room ti­me­tab­les and for ot­her si­mi­lar
              pur­po­ses. In ad­di­tion, per­so­nal da­ta may fea­tu­re in the
              mo­ni­to­ring of apart­ment-spe­ci­fic ener­gy and wa­ter
              con­sump­tion as well as in ot­her mea­su­re­ments ma­de with
              buil­ding tech­no­lo­gy.
            </p>
            <p>
              Da­ta is col­lec­ted in da­ta­ba­ses that are pro­tec­ted by
              fi­re­walls, pass­words and ot­her tech­ni­cal means. The­re are
              rest­ric­ted ac­cess rights to da­ta sto­red in the IT sys­tem,
              and the­se ac­cess rights are pro­tec­ted by a user na­me and
              pass­word.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Registry;
