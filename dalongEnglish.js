// ==UserScript==
// @name         Dalong English Redirector
// @match        http://dalong.net/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    function checkFrame(f) {
        var fName = f.getAttribute("name")
        //We only want to check and run on the later subframes
        if (fName != "main" && fName != "top" && fName != "counter" && fName != "header") {
            for (var i = 0; i < replaceMe.length; i++) {
                var cat = replaceMe[i];

                var type = cat[0]
                var kr_list = cat[1]
                var en_list = cat[2]
                var kr_cat = cat[3]
                var en_cat = cat[4]

                var origSrc = f.src.split("reviews/")[1];
                if (origSrc == kr_list) {
                    f.src = en_list;
                }
                if (origSrc == kr_cat) {
                    f.src = en_cat;
                    break;
                }
            }
        }
    }

    //TODO:
    //replace with keyed arrays to save on loopcycles

    //Format: subframe name, subframe listname, english subframe listname, subframe catalog name, english subframe catalog name
    var replaceMe = [
        ["mg", "mg/mg_list1.htm", "mg/mg_list1_e.htm", "mg/mg_cata1.htm", "mg/mg_cata1_e.htm"],
        ["mg2", "mg/mg_list2.htm", "mg/mg_list2_e.htm", "mg/mg_cata2.htm", "mg/mg_cata2_e.htm"],
        ["rg", "rg/rg_list.htm", "rg/rg_list_e.htm", "rg/rg_cata.htm", "rg/rg_cata_e.htm"],
        ["hg", "hg/hg_list.htm", "hg/hg_list_e.htm", "hg/hg_cata.htm", "hg/hg_cata_e.htm"],
        ["pg", "pg/pg_list.htm", "pg/pg_list_e.htm", "pg/pg_cata.htm", "pg/pg_cata_e.htm"],
        ["sd", "sd/sd_list.htm", "sd/sd_list_e.htm", "sd/sd_cata.htm", "sd/sd_cata_e.htm"],
        //["sd2", "sd/sd_list2.htm", "sd/sd_list2_e.htm", "sd/sd_cata2.htm", "sd/sd_cata2_e.htm"], //english version of SD2 does not exist at the moment
        ["seed", "seed/seed_list.htm", "seed/seed_list_e.htm", "seed/seed_cata.htm", "seed/seed_cata_e.htm"],
        ["00", "00/00_list.htm", "00/00_list_e.htm", "00/00_cata.htm", "00/00_cata_e.htm"],
        ["age", "age/age_list.htm", "age/age_list_e.htm", "age/age_cata.htm", "age/age_cata_e.htm"],
        ["bf", "bf/bf_list.htm", "bf/bf_list_e.htm", "bf/bf_cata.htm", "bf/bf_cata_e.htm"],
        ["ib", "ib/ib_list.htm", "ib/ib_list_e.htm", "ib/ib_cata.htm", "ib/ib_cata_e.htm"],
        ["getc", "etc/getc_list.htm", "etc/getc_list_e.htm", "etc/getc_cata.htm", "etc/getc_cata_e.htm"],
        ["cg", "cg/cg_list.htm", "cg/cg_list_e.htm", "cg/cg_cata.htm", "cg/cg_cata_e.htm"],
        ["old", "old/old_list.htm", "old/old_list_e.htm", "old/old_cata.htm", "old/old_cata_e.htm"],
        ["metc", "etc/metc_list.htm", "etc/metc_list_e.htm", "etc/metc_cata.htm", "etc/metc_cata_e.htm"],
        ["fetc", "etc/fetc_list.htm", "etc/fetc_list_e.htm", "etc/fetc_cata.htm", "etc/fetc_cata_e.htm"],
        ["sw", "etc/sw_list.htm", "etc/sw_list_e.htm", "etc/sw_cata.htm", "etc/sw_cata_e.htm"],
        ["mkoto", "kotobukiya/mkoto_list.htm", "kotobukiya/mkoto_list_e.htm", "kotobukiya/mkoto_cata.htm", "kotobukiya/mkoto_cata_e.htm"],
        ["fkoto", "kotobukiya/fkoto_list.htm", "kotobukiya/fkoto_list_e.htm", "kotobukiya/fkoto_cata.htm", "kotobukiya/fkoto_cata_e.htm"],
    ];

    var frames = document.getElementsByTagName("frame")
    for (var i = 0; i < frames.length; i++) {
        var f = frames[i];
        checkFrame(f)
    }
}
)();
