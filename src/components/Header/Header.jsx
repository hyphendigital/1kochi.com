import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
<div>
        <title>India Real Times</title>
        <style dangerouslySetInnerHTML={{__html: "\n  /* CSS for the placeholder animation */\n  .placeholder-container {\n    position: relative;\n  }\n\n  .placeholder {\n    width: 100%;\n    height: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #f0f0f0; /* Placeholder background color */\n    animation: placeholder-animation 1s infinite alternate; /* Placeholder animation */\n  }\n\n  @keyframes placeholder-animation {\n    0% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(1.1); /* Adjust the scale as needed for your animation */\n    }\n  }\n" }} />
        <div id="page-wrapper">
          <div id="outer">
            <div className="wrapper">
              <div className="page-layout arts page-home-page statically-cached-resource" data-name="home-page">
                <div className="clearfix">
                  <div className="col page-column blocks">
                    <div className="blockset blocks-bull">
                      <div className="blocks-bull grid-sixteen grid-last">
                        <div id="page-area-bull" className="page-area block editable" data-page-area="bull" data-max-items={1}>
                        </div>
                      </div>
                    </div>
                    <div className="blockset blocks-1x3x2-2x1x1">
                      <div className="blocks-3x2 grid-twelve">
                        <div id="page-area-blocks-1x3x2-2x1x1(1x3x2)" className="page-area block editable" data-page-area="blocks-1x3x2-2x1x1(1x3x2)" data-max-items={1}>
                          {/* Article  */}
                          <div id="Newsfeed-featured-container" />
                        </div>
                      </div>
                      <div className="blocks-1x1 grid-four grid-last">
                        <div id="page-area-blocks-1x3x2-2x1x1(2x1x1)" className="page-area block editable" data-page-area="blocks-1x3x2-2x1x1(2x1x1)" data-max-items={2}>
                          {/* 2x */}
                          <div id="Newsfeed-metros-container" />
                          <div id="Newsfeed-states-container" />
                        </div>
                      </div>
                    </div>
                    <div className="blockset blocks-1x2x2-4x1x1">
                      <div className="blocks-2x2 grid-eight">
                        <div id="page-area-blocks-1x2x2-4x1x1(1x2x2)" className="page-area block editable" data-page-area="blocks-1x2x2-4x1x1(1x2x2)" data-max-items={1}>
                          {/* Article  */}
                          <div id="Newsfeed-dubai-container" />
                        </div>
                      </div>
                      <div className="blocks-1x1 grid-eight grid-last">
                        <div id="page-area-blocks-1x2x2-4x1x1(4x1x1)" className="page-area block editable" data-page-area="blocks-1x2x2-4x1x1(4x1x1)" data-max-items={4}>
                          {/* 2x */}
                          <div id="Newsfeed-launches-container" />
                          <div id="Newsfeed-chennai-container" />
                          <div id="Newsfeed-state2s-container" />
                          <div id="Newsfeed-stat2es-container" />
                        </div>
                      </div>
                    </div>
                    <div className="blockset blocks-1x2x2-4x1x1">
                      <div className="blocks-1x1 grid-eight grid-last">
                        <div id="page-area-blocks-1x2x2-4x1x1(4x1x1)" className="page-area block editable" data-page-area="blocks-1x2x2-4x1x1(4x1x1)" data-max-items={4}>
                          {/* 2x */}
                          <div id="Newsfeed-me4tros-container" />
                          <div id="Newsfeed-sta5tes-container" />
                          <div id="Newsfeed-sta6tes-container" />
                          <div id="Newsfeed-sta7tes-container" />
                        </div>
                      </div>
                      <div className="blocks-2x2 grid-eight">
                        <div id="page-area-blocks-1x2x2-4x1x1(1x2x2)" className="page-area block editable" data-page-area="blocks-1x2x2-4x1x1(1x2x2)" data-max-items={1}>
                          {/* Article  */}
                          <div id="Newsfeed-featuryed-container" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        </>
    )
}

export default Header
