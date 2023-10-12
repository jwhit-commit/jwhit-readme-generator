// Object containing all licenses and related properties
const licenses = {
    apache: {
        name: "Apache 2.0",
        badge: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
        url: "https://opensource.org/licenses/Apache-2.0",
    },
    boost: {
        name: "Boost Software License 1.0",
        badge: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
        url: "https://www.boost.org/LICENSE_1_0.txt",
    },
    bsd: {
        name: "BSD 3-Clause License",
        badge: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
        url: "https://opensource.org/licenses/BSD-3-Clause",
    },
    cc0: {
        name: "Creative Commons 0-1.0",
        badge: "https://licensebuttons.net/l/zero/1.0/80x15.png",
        url: "http://creativecommons.org/publicdomain/zero/1.0/",
    },
    epl1: {
        name: "https://creativecommons.org/licenses/by-nc-nd/4.0/",
        badge: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
        url: "https://opensource.org/licenses/EPL-1.0",
    },
    gnu: {
        name: "GNU GPL v3",
        badge: "https://img.shields.io/badge/License-GPLv3-blue.svg",
        url: "https://www.gnu.org/licenses/gpl-3.0",
    },
    hippo: {
        name: "The Hippocratic License 2.1",
        badge: "https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg",
        url: "https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg",
    },
    ibm: {
        name: "IBM Public License Version 1.0",
        badge: "IBM Public License Version 1.0",
        url: "https://opensource.org/licenses/IPL-1.0",
    },
    isc: {
        name: "ISC License (ISC)",
        badge: "https://img.shields.io/badge/License-ISC-blue.svg",
        url: "https://img.shields.io/badge/License-ISC-blue.svg",
    },
    mit: {
        name: "The MIT License",
        badge: "https://img.shields.io/badge/License-MIT-yellow.svg",
        url: "https://opensource.org/licenses/MIT",
    },
    odc: {
        name: "Attribution License (BY) - Open Data Commons",
        badge: "https://img.shields.io/badge/License-ODC_BY-brightgreen.svg",
        url: "https://opendatacommons.org/licenses/by/",
    },
    perl: {
        name: "The Perl License",
        badge: "https://img.shields.io/badge/License-Perl-0298c3.svg",
        url: "https://opensource.org/licenses/Artistic-2.0",
    },
    sil: {
        name: "SIL Open Font License 1.1",
        badge: "https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg",
        url: "https://opensource.org/licenses/OFL-1.1",
    },
    unl: {
        name: "The Unlicense",
        badge: "https://img.shields.io/badge/license-Unlicense-blue.svg",
        url: "http://unlicense.org/",
    },
    wtfpl: {
        name: "The Do What the Fuck You Want to Public License",
        badge: "https://img.shields.io/badge/License-WTFPL-brightgreen.svg",
        url: "http://www.wtfpl.net/about/",
    },
    zlib: {
        name: "The zlib/libpng License",
        badge: "https://img.shields.io/badge/License-Zlib-lightgrey.svg",
        url: "https://opensource.org/licenses/Zlib",
    },   
};

module.exports = {
    licenses,
};
