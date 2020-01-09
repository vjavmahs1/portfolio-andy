import React, {Component} from 'react';
import Header from '../header/header';
import './publications.css'
import Publication from './publication/publication'

class Publications extends Component {
    render () {
        return(
            <div>
                <Header/>
                    <h1 style={{textAlign:'center'}}>Publications</h1>
                <h3 className='sub-header'>In-press/Accepted-in-principle</h3>

                <div className ="root">
                    <Publication body={"Kim, A. J., & Anderson, B. A. (in prep). Inter-trial priming of monetary reward with social reward."}/>
                    <Publication body={"Kim, A. J., Lee, D. S., Anderson, B. A. (under review). The influence of threat on the efficiency of goal-directed attentional control."}/>
                    <Publication body={"Goddard, T., McDonald, A.D., Alambeigi, H., Kim, A. J., Anderson, B. A. (under review). Drivers’ attitudes and unsafe behavior toward bicyclists: Linking driving simulation with implicit bias and survey data." }/>
                    <Publication body={"Kim, A. J., & Anderson, B. A. (in prep). Arousal-biased competition explains reduced distraction by reward cues under threat."} />
                    <Publication body= {"Anderson, B. A., & Kim, A. J. (submitted). Selection history-driven signal suppression."} />
                </div>

                <h3 className='sub-header'>Published</h3>
                <div className ="root">
                    <Publication body= {"Anderson, B. A., Kim, H., Britton, M. K., & Kim, A. J. (in press). Measuring attention to reward as an individual trait: The value-driven attention questionnaire (VDAQ). Psychological Research. "}/>
                    <Publication body= {"Kim, A. J., & Anderson, B. A. (2019, accepted in principle). The effect of concurrent reward on aversive information processing in the brain. NeuroImage. doi: 10.17605/OSF.IO.56ZGV "} />
                    <Publication body = {"Kim, A. J., & Anderson, B. A. (in press). Neural correlates of attentional capture driven by stimuli previously associated with social reward. Cognitive Neuroscience. "}/>
                    <Publication body = {"Kim, A. J., & Anderson, B. A. (in press). Threat reduces value-driven but not salience- driven attentional capture. Emotion. "}/>
                    <Publication body = {"Kim, A. J., Chang, J. Y-A., Shi, L., Chang, R. C-A., Ko, M. L. & Ko, G. Y. P. (2017). The effects of metformin on obesity-induced dysfunctional retinas. Investigative Ophthalmology & Visual Science, 58(1) 106-118."}/>
                    <Publication body = {"Shi, L., Kim,A.J., Chang, R. C. A., Chang, J. Y. A., Ying, W., Ko, M. L., Zhou, B., & Ko, G. Y. P. (2016). Deletion of miR-150 exacerbates retinal vascular overgrowth in high-fat-diet induced diabetic mice. PloS one, 11(6), e0157543."}/>
                    <Publication body = {"Huang, C. C., Shi, L., Lin, C. H., Kim, A. J., Ko, M. L., & Ko, G. Y. P. (2015). A new role for AMP‐activated protein kinase in the circadian regulation of L‐type voltage‐gated calcium channels in late‐stage embryonic retinal photoreceptors. Journal of Neurochemistry, 135, 727-741. "}/>
                    <Publication body = {"Chang, R. C., Shi, L., Huang, C. C., Kim, A. J., Ko, M. L., Zhou, B., & Ko, G. Y. (2015). High-fat-diet induced retinal dysfunction. Investigative Ophthalmology & Visual Science, 56: 2367-2380."}/>
                    <Publication body = {"Shi, L., Ko, S., Ko, M. L., Kim, A. J., & Ko, G. Y. (2015). Peptide lv augments L-type voltage- gated calcium channels through vascular endothelial growth factor receptor 2 (VEGFR2) signaling. Biochimica Et Biophysica Acta (BBA)- Molecular Cell Research, 1853(5), 1154-1164."} />
                </div>

            </div>
        )
    }
}
export default Publications