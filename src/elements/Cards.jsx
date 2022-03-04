import * as React from 'react';
import Grid from '@mui/material/Grid';
import SkillCard from '../components/SkillCard';

const Cards = () => {
  return (
    <Grid container>
        <Grid item xs={12} md={6} lg={4}>
            <SkillCard link="https://github.com/JalalMitali" header="REACT DOM" subHeader="Meta's Front End Framework" data=" " imgSrc="/assets/react.png" imgAlt="" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <SkillCard link="https://github.com/JalalMitali" header="REACT NATIVE" subHeader="Meta's Cross Platform Solution" data=" " imgSrc="/assets/reactnative.jpg" imgAlt="" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <SkillCard link="https://github.com/JalalMitali" header="JETPACK COMPOSE" subHeader="Google's Modern Android UI Toolkit " data=" " imgSrc="/assets/android.jpg" imgAlt="" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <SkillCard link="https://github.com/JalalMitali" header="KOTLIN & KTOR" subHeader="JetBrains's Asynchronous Framework" data=" " imgSrc="/assets/jalal.jpg" imgAlt="" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <SkillCard link="https://github.com/JalalMitali" header="FLUTTER & DESKTOP" subHeader="Google's Cross Platform Solution" data=" " imgSrc="/assets/jalal.jpg" imgAlt="" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <SkillCard link="https://github.com/JalalMitali" header="LARAVEL & PHP" subHeader="The PHP Framework for Web Artisans" data=" " imgSrc="/assets/jalal.jpg" imgAlt="" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <SkillCard link="https://github.com/JalalMitali" header="PYTHON" subHeader="The Choice for Machine Learning IMO" data=" " imgSrc="/assets/python.png" imgAlt="" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <SkillCard link="https://github.com/JalalMitali" header="MERN STACK" subHeader="Node JS & Express JS & React JS & MongoDB" data=" " imgSrc="/assets/mern.png" imgAlt="" />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <SkillCard link="https://github.com/JalalMitali" header="MUCH MORE!" subHeader="Firebase & Cloud & AWS & Git & More!" data=" " imgSrc="/assets/mongo.png" imgAlt="" />
        </Grid>
    </Grid>
  );
};
export default Cards;
