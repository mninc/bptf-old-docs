// ==UserScript==
// @name         backpack.tf old docs
// @namespace    https://steamcommunity.com/profiles/76561198320810968
// @version      1.3
// @description  have links to the old documentation
// @author       manic
// @grant        none
// @license      MIT

// @homepageURL     https://github.com/mninc/bptf-old-docs
// @supportURL      https://github.com/mninc/bptf-old-docs/issues
// @downloadURL     https://github.com/mninc/bptf-old-docs/raw/master/old_docs.user.js

// @run-at       document-end
// @match        https://backpack.tf/developer*
// @match        https://backpack.tf/api/docs*
// ==/UserScript==

(function() {
    'use strict';


    function run() {
        let links = document.getElementsByClassName("row")[0];
        links.innerHTML ='<div class="col-md-3">\n' +
            '                    <h6>\n' +
            '                        Getting started\n' +
            '                    </h6>\n' +
            '                    <ul class="list-unstyled">\n' +
            '                        <li>\n' +
            '                            <a href="/developer">\n' +
            '                                Developer index\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <a href="/developer/pages/api_conventions">\n' +
            '                                API conventions\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <a href="/developer/pages/oauth">\n' +
            '                                Introduction to OAuth\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <a href="/developer/pages/oauth_grants">\n' +
            '                                OAuth grants\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                    </ul>\n' +
            '                </div>\n' +
            '                <div class="col-md-3">\n' +
            '                    <h6>\n' +
            '                        My apps\n' +
            '                    </h6>\n' +
            '                    <ul class="list-unstyled">\n' +
            '                        <li>\n' +
            '                            <a href="/developer/apps">\n' +
            '                                Manage my apps\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <a href="/developer/apikey/view">\n' +
            '                                Manage my API key\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                    </ul>\n' +
            '                    <h6>\n' +
            '                        New docs\n' +
            '                    </h6>\n' +
            '                    <ul class="list-unstyled">\n' +
            '                        <li>\n' +
            '                            <a href="/api/index.html">\n' +
            '                                API documentation\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                    </ul>\n' +
            '                </div>\n' +
            '                <div class="col-md-3">\n' +
            '                    <h6>\n' +
            '                        Web APIs\n' +
            '                    </h6>\n' +
            '                    <ul class="list-unstyled">\n' +
            '                        <li>\n' +
            '                            <a href="/api/docs/user_info">\n' +
            '                                Get User Info\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <a href="/api/docs/classifieds_search">\n' +
            '                                Search Classifieds Listings\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                    </ul>\n' +
            '                </div>\n' +
            '                <div class="col-md-3">\n' +
            '                    <h6>\n' +
            '                        User Token APIs\n' +
            '                    </h6>\n' +
            '                    <ul class="list-unstyled">\n' +
            '                        <li>\n' +
            '                            <a href="/api/docs/create_listings">\n' +
            '                                Create Listings\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <a href="/api/docs/my_listings">\n' +
            '                                My Listings\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                    </ul>\n' +
            '                    <h6>\n' +
            '                        Miscellaneous\n' +
            '                    </h6>\n' +
            '                    <ul class="list-unstyled">\n' +
            '                        <li>\n' +
            '                            <a href="/developer/particles">\n' +
            '                                Particle images\n' +
            '                            </a>\n' +
            '                        </li>\n' +
            '                    </ul>\n' +
            '                </div>';
    }

    window.onload = run;
})();
