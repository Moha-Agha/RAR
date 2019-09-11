import React, { Component } from 'react';

export default class TextBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <article className='container '>
        <div className='row'>
          <div className='blogText offset-lg-1 col-lg-10 col-sm-12 mt-5'>
            <h1>Firefox Blocks Third-Party Tracking Cookies</h1>
            <div className='h1After mb-5'></div>
            <h2 className='mb-6'>
              Firefox’s Enhanced Tracking Protection gives users more control
            </h2>

            <p className='blogTextP'>
              For today’s release, Enhanced Tracking Protection will
              automatically be turned on by default for all users worldwide as
              part of the ‘Standard’ setting in the Firefox browser and will
              block known “third-party tracking cookies” according to the
              Disconnect list. We first enabled this default feature for new
              users in June 2019. As part of this journey we rigorously tested,
              refined, and ultimately landed on a new approach to anti-tracking
              that is core to delivering on our promise of privacy and security
              as central aspects of your Firefox experience.
            </p>
            <br />

            <h3 className='mb-4'>list of the suggestions video</h3>
            {this.props.searchResults.map((searchResult, i) => {
              return <p>{searchResult.snippet.title}</p>;
            })}
            <br />
            <p className='blogTextP'>
              Currently over 20% of Firefox users have Enhanced Tracking
              Protection on. With today’s release, we expect to provide
              protection for 100% of ours users by default. Enhanced Tracking
              Protection works behind-the-scenes to keep a company from forming
              a profile of you based on their tracking of your browsing behavior
              across websites — often without your knowledge or consent. Those
              profiles and the information they contain may then be sold and
              used for purposes you never knew or intended. Enhanced Tracking
              Protection helps to mitigate this threat and puts you back in
              control of your online experience.
            </p>
            <br />
            <p className='quotation'>
              “ You’ll know when Enhanced Tracking Protection is working when
              you visit a site and see a shield icon in the address bar “
            </p>
            <br />
            <p className='blogTextP'>
              When you see the shield icon, you should feel safe that Firefox is
              blocking thousands of companies from your online activity.
              <br />
              For those who want to see which companies we block, you can click
              on the shield icon, go to the Content Blocking section, then
              Cookies. It should read Blocking Tracking Cookies. Then, click on
              the arrow on the right hand side, and you’ll see the companies
              listed as third party cookies that Firefox has blocked:
            </p>
            <img
              className='blogImg mb-3'
              alt='blogImag'
              src='./images/blog/blog_img_1.png'
            />
            <p className='blogTextP'>
              If you want to turn off blocking for a specific site, click on the
              Turn off Blocking for this Site button.
            </p>
            <br />
            <p className='blogTextP'>
              Protecting users’ privacy beyond tracking cookies Cookies are not
              the only entities that follow you around on the web, trying to use
              what’s yours without your knowledge or consent. Cryptominers, for
              example, access your computer’s CPU, ultimately slowing it down
              and draining your battery, in order to generate cryptocurrency —
              not for yours but someone else’s benefit. We introduced the option
              to block cryptominers in previous versions of Firefox Nightly and
              Beta and are including it in the ‘Standard Mode‘ of your Content
              Blocking preferences as of today.
            </p>
            <br />
            <p className='blogTextP'>
              Another type of script that you may not want to run in your
              browser are Fingerprinting scripts. They harvest a snapshot of
              your computer’s configuration when you visit a website. The
              snapshot can then also be used to track you across the web, an
              issue that has been present for years. To get protection from
              fingerprinting scripts Firefox users can turn on ‘Strict Mode.’ In
              a future release, we plan to turn fingerprinting protections on by
              default.
            </p>
            <br />

            <p className='endOfTheArticale mt-4 mb-6'>
              AIDA - Mohammad Mahmoud Agha <br />
              2019 Rostock
            </p>
          </div>
        </div>
      </article>
    );
  }
}
