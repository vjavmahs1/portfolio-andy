import React, { Component } from "react";
import Header from "../header/header";
import "./interest.css";
import Research from "./researches/research";

class Interest extends Component {
  render() {
    return (
      <div className="outer">
        <Header />
        <h1 style={{ textAlign: "center" }}>Research Interests</h1>
        <h3 className="sub-header">
          1. The Effects of Experimentally-Induced Anxiety on Attentional
          Capture
        </h3>
        <div className="root">
          <Research
            body={
              "Anxiety disorders are the most common mental illnesses in the United States with a prevalence of 18.1% and result in related costs of approximately $50 billion per year. However, translating research into effective cognitive behavioral therapies has been inconsistent in the last decade, but perhaps unsurprising given our limited understanding of the relationship between anxiety and cognition, and in particular the ability to distinguish when and how anxiety impairs and benefits cognitive performance. I am interested in investigating the mechanisms of how adaptive anxiety elicits functional responses, specifically across different attention networks and eliciting stimuli, a critical prerequisite in understanding long-term dysfunction."
            }
          />
        </div>

        <h3 className="sub-header">
          2. Attentional Capture using Social Reward
        </h3>
        <div className="root">
          <Research
            body={
              "Stimuli previously associated with monetary reward have been shown to automatically capture attention in both behavioral and neurophysiological studies. Stimuli previously associated with positive social feedback similarly capture attention; however, it is unknown whether such social facilitation of attention relies on similar or dissociable neural systems. I am interested in identifying the neural correlates of attentional capture by social reward and whether there is a common neural mechanism for directing attention on the basis of selection history that generalizes across different types of reward. It is yet unclear whether our understanding of habit learning and addiction is similarly represented in the brain when using social reward."
            }
          />
        </div>

        <h3 className="sub-header">
          3. Attentional Capture in the Auditory Domain
        </h3>
        <div className="root">
          <Research
            body={
              "The majority of studies examining attentional capture via behavioral and neuroimaging techniques have investigated the visual domain. However, it is unknown whether these mechanisms and neural networks identified for visual attentional capture share modalities in the auditory domain. I am currently investigating this hypothesis via fMRI."
            }
          />
        </div>
      </div>
    );
  }
}

export default Interest;
