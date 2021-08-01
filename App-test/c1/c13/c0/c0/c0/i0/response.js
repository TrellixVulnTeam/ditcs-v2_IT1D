var res = {'data':'HTTP/1.1 200 OK\x0aDate: Sun, 01 Aug 2021 15:05:20 GMT\x0aServer: WSGIServer/0.2 CPython/3.9.2\x0aContent-Type: text/css\x0aContent-Length: 19513\x0aContent-Disposition: inline; filename=\x22base.css\x22\x0aLast-Modified: Mon, 05 Jul 2021 17:47:22 GMT\x0a\x0a/*\x0a    DJANGO Admin styles\x0a*/\x0a\x0a@import url(fonts.css);\x0a\x0a/* VARIABLE DEFINITIONS */\x0a:root {\x0a  --primary: #79aec8;\x0a  --secondary: #417690;\x0a  --accent: #f5dd5d;\x0a  --primary-fg: #fff;\x0a\x0a  --body-fg: #333;\x0a  --body-bg: #fff;\x0a  --body-quiet-color: #666;\x0a  --body-loud-color: #000;\x0a\x0a  --header-color: #ffc;\x0a  --header-branding-color: var(--accent);\x0a  --header-bg: var(--secondary);\x0a  --header-link-color: var(--primary-fg);\x0a\x0a  --breadcrumbs-fg: #c4dce8;\x0a  --breadcrumbs-link-fg: var(--body-bg);\x0a  --breadcrumbs-bg: var(--primary);\x0a\x0a  --link-fg: #447e9b;\x0a  --link-hover-color: #036;\x0a  --link-selected-fg: #5b80b2;\x0a\x0a  --hairline-color: #e8e8e8;\x0a  --border-color: #ccc;\x0a\x0a  --error-fg: #ba2121;\x0a\x0a  --message-success-bg: #dfd;\x0a  --message-warning-bg: #ffc;\x0a  --message-error-bg: #ffefef;\x0a\x0a  --darkened-bg: #f8f8f8; /* A bit darker than --body-bg */\x0a  --selected-bg: #e4e4e4; /* E.g. selected table cells */\x0a  --selected-row: #ffc;\x0a\x0a  --button-fg: #fff;\x0a  --button-bg: var(--primary);\x0a  --button-hover-bg: #609ab6;\x0a  --default-button-bg: var(--secondary);\x0a  --default-button-hover-bg: #205067;\x0a  --close-button-bg: #888; /* Previously #bbb, contrast 1.92 */\x0a  --close-button-hover-bg: #747474;\x0a  --delete-button-bg: #ba2121;\x0a  --delete-button-hover-bg: #a41515;\x0a\x0a  --object-tools-fg: var(--button-fg);\x0a  --object-tools-bg: var(--close-button-bg);\x0a  --object-tools-hover-bg: var(--close-button-hover-bg);\x0a}\x0a\x0a@media (prefers-color-scheme: dark) {\x0a  :root {\x0a    --primary: #264b5d;\x0a    --primary-fg: #eee;\x0a\x0a    --body-fg: #eeeeee;\x0a    --body-bg: #121212;\x0a    --body-quiet-color: #e0e0e0;\x0a    --body-loud-color: #ffffff;\x0a\x0a    --breadcrumbs-link-fg: #e0e0e0;\x0a    --breadcrumbs-bg: var(--primary);\x0a\x0a    --link-fg: #81d4fa;\x0a    --link-hover-color: #4ac1f7;\x0a    --link-selected-fg: #6f94c6;\x0a\x0a    --hairline-color: #272727;\x0a    --border-color: #353535;\x0a\x0a    --error-fg: #e35f5f;\x0a    --message-success-bg: #006b1b;\x0a    --message-warning-bg: #583305;\x0a    --message-error-bg: #570808;\x0a\x0a    --darkened-bg: #212121;\x0a    --selected-bg: #1b1b1b;\x0a    --selected-row: #00363a;\x0a\x0a    --close-button-bg: #333333;\x0a    --close-button-hover-bg: #666666;\x0a  }\x0a}\x0a\x0ahtml, body {\x0a    height: 100%;\x0a}\x0a\x0abody {\x0a    margin: 0;\x0a    padding: 0;\x0a    font-size: 14px;\x0a    font-family: \x22Roboto\x22,\x22Lucida Grande\x22,\x22DejaVu Sans\x22,\x22Bitstream Vera Sans\x22,Verdana,Arial,sans-serif;\x0a    color: var(--body-fg);\x0a    background: var(--body-bg);\x0a}\x0a\x0a/* LINKS */\x0a\x0aa:link, a:visited {\x0a    color: var(--link-fg);\x0a    text-decoration: none;\x0a    transition: color 0.15s, background 0.15s;\x0a}\x0a\x0aa:focus, a:hover {\x0a    color: var(--link-hover-color);\x0a}\x0a\x0aa:focus {\x0a    text-decoration: underline;\x0a}\x0a\x0aa img {\x0a    border: none;\x0a}\x0a\x0aa.section:link, a.section:visited {\x0a    color: var(--header-link-color);\x0a    text-decoration: none;\x0a}\x0a\x0aa.section:focus, a.section:hover {\x0a    text-decoration: underline;\x0a}\x0a\x0a/* GLOBAL DEFAULTS */\x0a\x0ap, ol, ul, dl {\x0a    margin: .2em 0 .8em 0;\x0a}\x0a\x0ap {\x0a    padding: 0;\x0a    line-height: 140%;\x0a}\x0a\x0ah1,h2,h3,h4,h5 {\x0a    font-weight: bold;\x0a}\x0a\x0ah1 {\x0a    margin: 0 0 20px;\x0a    font-weight: 300;\x0a    font-size: 20px;\x0a    color: var(--body-quiet-color);\x0a}\x0a\x0ah2 {\x0a    font-size: 16px;\x0a    margin: 1em 0 .5em 0;\x0a}\x0a\x0ah2.subhead {\x0a    font-weight: normal;\x0a    margin-top: 0;\x0a}\x0a\x0ah3 {\x0a    font-size: 14px;\x0a    margin: .8em 0 .3em 0;\x0a    color: var(--body-quiet-color);\x0a    font-weight: bold;\x0a}\x0a\x0ah4 {\x0a    font-size: 12px;\x0a    margin: 1em 0 .8em 0;\x0a    padding-bottom: 3px;\x0a}\x0a\x0ah5 {\x0a    font-size: 10px;\x0a    margin: 1.5em 0 .5em 0;\x0a    color: var(--body-quiet-color);\x0a    text-transform: uppercase;\x0a    letter-spacing: 1px;\x0a}\x0a\x0aul \x3e li {\x0a    list-style-type: square;\x0a    padding: 1px 0;\x0a}\x0a\x0ali ul {\x0a    margin-bottom: 0;\x0a}\x0a\x0ali, dt, dd {\x0a    font-size: 13px;\x0a    line-height: 20px;\x0a}\x0a\x0adt {\x0a    font-weight: bold;\x0a    margin-top: 4px;\x0a}\x0a\x0add {\x0a    margin-left: 0;\x0a}\x0a\x0aform {\x0a    margin: 0;\x0a    padding: 0;\x0a}\x0a\x0afieldset {\x0a    margin: 0;\x0a    min-width: 0;\x0a    padding: 0;\x0a    border: none;\x0a    border-top: 1px solid var(--hairline-color);\x0a}\x0a\x0ablockquote {\x0a    font-size: 11px;\x0a    color: #777;\x0a    margin-left: 2px;\x0a    padding-left: 10px;\x0a    border-left: 5px solid #ddd;\x0a}\x0a\x0acode, pre {\x0a    font-family: \x22Bitstream Vera Sans Mono\x22, Monaco, \x22Courier New\x22, Courier, monospace;\x0a    color: var(--body-quiet-color);\x0a    font-size: 12px;\x0a    overflow-x: auto;\x0a}\x0a\x0apre.literal-block {\x0a    margin: 10px;\x0a    background: var(--darkened-bg);\x0a    padding: 6px 8px;\x0a}\x0a\x0acode strong {\x0a    color: #930;\x0a}\x0a\x0ahr {\x0a    clear: both;\x0a    color: var(--hairline-color);\x0a    background-color: var(--hairline-color);\x0a    height: 1px;\x0a    border: none;\x0a    margin: 0;\x0a    padding: 0;\x0a    font-size: 1px;\x0a    line-height: 1px;\x0a}\x0a\x0a/* TEXT STYLES & MODIFIERS */\x0a\x0a.small {\x0a    font-size: 11px;\x0a}\x0a\x0a.mini {\x0a    font-size: 10px;\x0a}\x0a\x0a.help, p.help, form p.help, div.help, form div.help, div.help li {\x0a    font-size: 11px;\x0a    color: var(--body-quiet-color);\x0a}\x0a\x0adiv.help ul {\x0a     margin-bottom: 0;\x0a}\x0a\x0a.help-tooltip {\x0a    cursor: help;\x0a}\x0a\x0ap img, h1 img, h2 img, h3 img, h4 img, td img {\x0a    vertical-align: middle;\x0a}\x0a\x0a.quiet, a.quiet:link, a.quiet:visited {\x0a    color: var(--body-quiet-color);\x0a    font-weight: normal;\x0a}\x0a\x0a.clear {\x0a    clear: both;\x0a}\x0a\x0a.nowrap {\x0a    white-space: nowrap;\x0a}\x0a\x0a.hidden {\x0a    display: none;\x0a}\x0a\x0a/* TABLES */\x0a\x0atable {\x0a    border-collapse: collapse;\x0a    border-color: var(--border-color);\x0a}\x0a\x0atd, th {\x0a    font-size: 13px;\x0a    line-height: 16px;\x0a    border-bottom: 1px solid var(--hairline-color);\x0a    vertical-align: top;\x0a    padding: 8px;\x0a}\x0a\x0ath {\x0a    font-weight: 600;\x0a    text-align: left;\x0a}\x0a\x0athead th,\x0atfoot td {\x0a    color: var(--body-quiet-color);\x0a    padding: 5px 10px;\x0a    font-size: 11px;\x0a    background: var(--body-bg);\x0a    border: none;\x0a    border-top: 1px solid var(--hairline-color);\x0a    border-bottom: 1px solid var(--hairline-color);\x0a}\x0a\x0atfoot td {\x0a    border-bottom: none;\x0a    border-top: 1px solid var(--hairline-color);\x0a}\x0a\x0athead th.required {\x0a    color: var(--body-loud-color);\x0a}\x0a\x0atr.alt {\x0a    background: var(--darkened-bg);\x0a}\x0a\x0atr:nth-child(odd), .row-form-errors {\x0a    background: var(--body-bg);\x0a}\x0a\x0atr:nth-child(even),\x0atr:nth-child(even) .errorlist,\x0atr:nth-child(odd) + .row-form-errors,\x0atr:nth-child(odd) + .row-form-errors .errorlist {\x0a    background: var(--darkened-bg);\x0a}\x0a\x0a/* SORTABLE TABLES */\x0a\x0athead th {\x0a    padding: 5px 10px;\x0a    line-height: normal;\x0a    text-transform: uppercase;\x0a    background: var(--darkened-bg);\x0a}\x0a\x0athead th a:link, thead th a:visited {\x0a    color: var(--body-quiet-color);\x0a}\x0a\x0athead th.sorted {\x0a    background: var(--selected-bg);\x0a}\x0a\x0athead th.sorted .text {\x0a    padding-right: 42px;\x0a}\x0a\x0atable thead th .text span {\x0a    padding: 8px 10px;\x0a    display: block;\x0a}\x0a\x0atable thead th .text a {\x0a    display: block;\x0a    cursor: pointer;\x0a    padding: 8px 10px;\x0a}\x0a\x0atable thead th .text a:focus, table thead th .text a:hover {\x0a    background: var(--selected-bg);\x0a}\x0a\x0athead th.sorted a.sortremove {\x0a    visibility: hidden;\x0a}\x0a\x0atable thead th.sorted:hover a.sortremove {\x0a    visibility: visible;\x0a}\x0a\x0atable thead th.sorted .sortoptions {\x0a    display: block;\x0a    padding: 9px 5px 0 5px;\x0a    float: right;\x0a    text-align: right;\x0a}\x0a\x0atable thead th.sorted .sortpriority {\x0a    font-size: .8em;\x0a    min-width: 12px;\x0a    text-align: center;\x0a    vertical-align: 3px;\x0a    margin-left: 2px;\x0a    margin-right: 2px;\x0a}\x0a\x0atable thead th.sorted .sortoptions a {\x0a    position: relative;\x0a    width: 14px;\x0a    height: 14px;\x0a    display: inline-block;\x0a    background: url(../img/sorting-icons.svg) 0 0 no-repeat;\x0a    background-size: 14px auto;\x0a}\x0a\x0atable thead th.sorted .sortoptions a.sortremove {\x0a    background-position: 0 0;\x0a}\x0a\x0atable thead th.sorted .sortoptions a.sortremove:after {\x0a    content: \x27\x5c\x5c\x27;\x0a    position: absolute;\x0a    top: -6px;\x0a    left: 3px;\x0a    font-weight: 200;\x0a    font-size: 18px;\x0a    color: var(--body-quiet-color);\x0a}\x0a\x0atable thead th.sorted .sortoptions a.sortremove:focus:after,\x0atable thead th.sorted .sortoptions a.sortremove:hover:after {\x0a    color: var(--link-fg);\x0a}\x0a\x0atable thead th.sorted .sortoptions a.sortremove:focus,\x0atable thead th.sorted .sortoptions a.sortremove:hover {\x0a    background-position: 0 -14px;\x0a}\x0a\x0atable thead th.sorted .sortoptions a.ascending {\x0a    background-position: 0 -28px;\x0a}\x0a\x0atable thead th.sorted .sortoptions a.ascending:focus,\x0atable thead th.sorted .sortoptions a.ascending:hover {\x0a    background-position: 0 -42px;\x0a}\x0a\x0atable thead th.sorted .sortoptions a.descending {\x0a    top: 1px;\x0a    background-position: 0 -56px;\x0a}\x0a\x0atable thead th.sorted .sortoptions a.descending:focus,\x0atable thead th.sorted .sortoptions a.descending:hover {\x0a    background-position: 0 -70px;\x0a}\x0a\x0a/* FORM DEFAULTS */\x0a\x0ainput, textarea, select, .form-row p, form .button {\x0a    margin: 2px 0;\x0a    padding: 2px 3px;\x0a    vertical-align: middle;\x0a    font-family: \x22Roboto\x22, \x22Lucida Grande\x22, Verdana, Arial, sans-serif;\x0a    font-weight: normal;\x0a    font-size: 13px;\x0a}\x0a.form-row div.help {\x0a    padding: 2px 3px;\x0a}\x0a\x0atextarea {\x0a    vertical-align: top;\x0a}\x0a\x0ainput[type=text], input[type=password], input[type=email], input[type=url],\x0ainput[type=number], input[type=tel], textarea, select, .vTextField {\x0a    border: 1px solid var(--border-color);\x0a    border-radius: 4px;\x0a    padding: 5px 6px;\x0a    margin-top: 0;\x0a    color: var(--body-fg);\x0a    background-color: var(--body-bg);\x0a}\x0a\x0ainput[type=text]:focus, input[type=password]:focus, input[type=email]:focus,\x0ainput[type=url]:focus, input[type=number]:focus, input[type=tel]:focus,\x0atextarea:focus, select:focus, .vTextField:focus {\x0a    border-color: var(--body-quiet-color);\x0a}\x0a\x0aselect {\x0a    height: 30px;\x0a}\x0a\x0aselect[multiple] {\x0a    /* Allow HTML size attribute to override the height in the rule above. */\x0a    height: auto;\x0a    min-height: 150px;\x0a}\x0a\x0a/* FORM BUTTONS */\x0a\x0a.button, input[type=submit], input[type=button], .submit-row input, a.button {\x0a    background: var(--button-bg);\x0a    padding: 10px 15px;\x0a    border: none;\x0a    border-radius: 4px;\x0a    color: var(--button-fg);\x0a    cursor: pointer;\x0a    transition: background 0.15s;\x0a}\x0a\x0aa.button {\x0a    padding: 4px 5px;\x0a}\x0a\x0a.button:active, input[type=submit]:active, input[type=button]:active,\x0a.button:focus, input[type=submit]:focus, input[type=button]:focus,\x0a.button:hover, input[type=submit]:hover, input[type=button]:hover {\x0a    background: var(--button-hover-bg);\x0a}\x0a\x0a.button[disabled], input[type=submit][disabled], input[type=button][disabled] {\x0a    opacity: 0.4;\x0a}\x0a\x0a.button.default, input[type=submit].default, .submit-row input.default {\x0a    float: right;\x0a    border: none;\x0a    font-weight: 400;\x0a    background: var(--default-button-bg);\x0a}\x0a\x0a.button.default:active, input[type=submit].default:active,\x0a.button.default:focus, input[type=submit].default:focus,\x0a.button.default:hover, input[type=submit].default:hover {\x0a    background: var(--default-button-hover-bg);\x0a}\x0a\x0a.button[disabled].default,\x0ainput[type=submit][disabled].default,\x0ainput[type=button][disabled].default {\x0a    opacity: 0.4;\x0a}\x0a\x0a\x0a/* MODULES */\x0a\x0a.module {\x0a    border: none;\x0a    margin-bottom: 30px;\x0a    background: var(--body-bg);\x0a}\x0a\x0a.module p, .module ul, .module h3, .module h4, .module dl, .module pre {\x0a    padding-left: 10px;\x0a    padding-right: 10px;\x0a}\x0a\x0a.module blockquote {\x0a    margin-left: 12px;\x0a}\x0a\x0a.module ul, .module ol {\x0a    margin-left: 1.5em;\x0a}\x0a\x0a.module h3 {\x0a    margin-top: .6em;\x0a}\x0a\x0a.module h2, .module caption, .inline-group h2 {\x0a    margin: 0;\x0a    padding: 8px;\x0a    font-weight: 400;\x0a    font-size: 13px;\x0a    text-align: left;\x0a    background: var(--primary);\x0a    color: var(--header-link-color);\x0a}\x0a\x0a.module caption,\x0a.inline-group h2 {\x0a    font-size: 12px;\x0a    letter-spacing: 0.5px;\x0a    text-transform: uppercase;\x0a}\x0a\x0a.module table {\x0a    border-collapse: collapse;\x0a}\x0a\x0a/* MESSAGES & ERRORS */\x0a\x0aul.messagelist {\x0a    padding: 0;\x0a    margin: 0;\x0a}\x0a\x0aul.messagelist li {\x0a    display: block;\x0a    font-weight: 400;\x0a    font-size: 13px;\x0a    padding: 10px 10px 10px 65px;\x0a    margin: 0 0 10px 0;\x0a    background: var(--message-success-bg) url(../img/icon-yes.svg) 40px 12px no-repeat;\x0a    background-size: 16px auto;\x0a    color: var(--body-fg);\x0a}\x0a\x0aul.messagelist li.warning {\x0a    background: var(--message-warning-bg) url(../img/icon-alert.svg) 40px 14px no-repeat;\x0a    background-size: 14px auto;\x0a}\x0a\x0aul.messagelist li.error {\x0a    background: var(--message-error-bg) url(../img/icon-no.svg) 40px 12px no-repeat;\x0a    background-size: 16px auto;\x0a}\x0a\x0a.errornote {\x0a    font-size: 14px;\x0a    font-weight: 700;\x0a    display: block;\x0a    padding: 10px 12px;\x0a    margin: 0 0 10px 0;\x0a    color: var(--error-fg);\x0a    border: 1px solid var(--error-fg);\x0a    border-radius: 4px;\x0a    background-color: var(--body-bg);\x0a    background-position: 5px 12px;\x0a    overflow-wrap: break-word;\x0a}\x0a\x0aul.errorlist {\x0a    margin: 0 0 4px;\x0a    padding: 0;\x0a    color: var(--error-fg);\x0a    background: var(--body-bg);\x0a}\x0a\x0aul.errorlist li {\x0a    font-size: 13px;\x0a    display: block;\x0a    margin-bottom: 4px;\x0a    overflow-wrap: break-word;\x0a}\x0a\x0aul.errorlist li:first-child {\x0a    margin-top: 0;\x0a}\x0a\x0aul.errorlist li a {\x0a    color: inherit;\x0a    text-decoration: underline;\x0a}\x0a\x0atd ul.errorlist {\x0a    margin: 0;\x0a    padding: 0;\x0a}\x0a\x0atd ul.errorlist li {\x0a    margin: 0;\x0a}\x0a\x0a.form-row.errors {\x0a    margin: 0;\x0a    border: none;\x0a    border-bottom: 1px solid var(--hairline-color);\x0a    background: none;\x0a}\x0a\x0a.form-row.errors ul.errorlist li {\x0a    padding-left: 0;\x0a}\x0a\x0a.errors input, .errors select, .errors textarea,\x0atd ul.errorlist + input, td ul.errorlist + select, td ul.errorlist + textarea {\x0a    border: 1px solid var(--error-fg);\x0a}\x0a\x0a.description {\x0a    font-size: 12px;\x0a    padding: 5px 0 0 12px;\x0a}\x0a\x0a/* BREADCRUMBS */\x0a\x0adiv.breadcrumbs {\x0a    background: var(--breadcrumbs-bg);\x0a    padding: 10px 40px;\x0a    border: none;\x0a    color: var(--breadcrumbs-fg);\x0a    text-align: left;\x0a}\x0a\x0adiv.breadcrumbs a {\x0a    color: var(--breadcrumbs-link-fg);\x0a}\x0a\x0adiv.breadcrumbs a:focus, div.breadcrumbs a:hover {\x0a    color: var(--breadcrumbs-fg);\x0a}\x0a\x0a/* ACTION ICONS */\x0a\x0a.viewlink, .inlineviewlink {\x0a    padding-left: 16px;\x0a    background: url(../img/icon-viewlink.svg) 0 1px no-repeat;\x0a}\x0a\x0a.addlink {\x0a    padding-left: 16px;\x0a    background: url(../img/icon-addlink.svg) 0 1px no-repeat;\x0a}\x0a\x0a.changelink, .inlinechangelink {\x0a    padding-left: 16px;\x0a    background: url(../img/icon-changelink.svg) 0 1px no-repeat;\x0a}\x0a\x0a.deletelink {\x0a    padding-left: 16px;\x0a    background: url(../img/icon-deletelink.svg) 0 1px no-repeat;\x0a}\x0a\x0aa.deletelink:link, a.deletelink:visited {\x0a    color: #CC3434; /* XXX Probably unused? */\x0a}\x0a\x0aa.deletelink:focus, a.deletelink:hover {\x0a    color: #993333; /* XXX Probably unused? */\x0a    text-decoration: none;\x0a}\x0a\x0a/* OBJECT TOOLS */\x0a\x0a.object-tools {\x0a    font-size: 10px;\x0a    font-weight: bold;\x0a    padding-left: 0;\x0a    float: right;\x0a    position: relative;\x0a    margin-top: -48px;\x0a}\x0a\x0a.object-tools li {\x0a    display: block;\x0a    float: left;\x0a    margin-left: 5px;\x0a    height: 16px;\x0a}\x0a\x0a.object-tools a {\x0a    border-radius: 15px;\x0a}\x0a\x0a.object-tools a:link, .object-tools a:visited {\x0a    display: block;\x0a    float: left;\x0a    padding: 3px 12px;\x0a    background: var(--object-tools-bg);\x0a    color: var(--object-tools-fg);\x0a    font-weight: 400;\x0a    font-size: 11px;\x0a    text-transform: uppercase;\x0a    letter-spacing: 0.5px;\x0a}\x0a\x0a.object-tools a:focus, .object-tools a:hover {\x0a    background-color: var(--object-tools-hover-bg);\x0a}\x0a\x0a.object-tools a:focus{\x0a    text-decoration: none;\x0a}\x0a\x0a.object-tools a.viewsitelink, .object-tools a.addlink {\x0a    background-repeat: no-repeat;\x0a    background-position: right 7px center;\x0a    padding-right: 26px;\x0a}\x0a\x0a.object-tools a.viewsitelink {\x0a    background-image: url(../img/tooltag-arrowright.svg);\x0a}\x0a\x0a.object-tools a.addlink {\x0a    background-image: url(../img/tooltag-add.svg);\x0a}\x0a\x0a/* OBJECT HISTORY */\x0a\x0atable#change-history {\x0a    width: 100%;\x0a}\x0a\x0atable#change-history tbody th {\x0a    width: 16em;\x0a}\x0a\x0a/* PAGE STRUCTURE */\x0a\x0a#container {\x0a    position: relative;\x0a    width: 100%;\x0a    min-width: 980px;\x0a    padding: 0;\x0a    display: flex;\x0a    flex-direction: column;\x0a    height: 100%;\x0a}\x0a\x0a#container \x3e div {\x0a    flex-shrink: 0;\x0a}\x0a\x0a#container \x3e .main {\x0a    display: flex;\x0a    flex: 1 0 auto;\x0a}\x0a\x0a.main \x3e .content {\x0a    flex:  1 0;\x0a    max-width: 100%;\x0a}\x0a\x0a#content {\x0a    padding: 20px 40px;\x0a}\x0a\x0a.dashboard #content {\x0a    width: 600px;\x0a}\x0a\x0a#content-main {\x0a    float: left;\x0a    width: 100%;\x0a}\x0a\x0a#content-related {\x0a    float: right;\x0a    width: 260px;\x0a    position: relative;\x0a    margin-right: -300px;\x0a}\x0a\x0a#footer {\x0a    clear: both;\x0a    padding: 10px;\x0a}\x0a\x0a/* COLUMN TYPES */\x0a\x0a.colMS {\x0a    margin-right: 300px;\x0a}\x0a\x0a.colSM {\x0a    margin-left: 300px;\x0a}\x0a\x0a.colSM #content-related {\x0a    float: left;\x0a    margin-right: 0;\x0a    margin-left: -300px;\x0a}\x0a\x0a.colSM #content-main {\x0a    float: right;\x0a}\x0a\x0a.popup .colM {\x0a    width: auto;\x0a}\x0a\x0a/* HEADER */\x0a\x0a#header {\x0a    width: auto;\x0a    height: auto;\x0a    display: flex;\x0a    justify-content: space-between;\x0a    align-items: center;\x0a    padding: 10px 40px;\x0a    background: var(--header-bg);\x0a    color: var(--header-color);\x0a    overflow: hidden;\x0a}\x0a\x0a#header a:link, #header a:visited {\x0a    color: var(--header-link-color);\x0a}\x0a\x0a#header a:focus , #header a:hover {\x0a    text-decoration: underline;\x0a}\x0a\x0a#branding {\x0a    float: left;\x0a}\x0a\x0a#branding h1 {\x0a    padding: 0;\x0a    margin: 0 20px 0 0;\x0a    font-weight: 300;\x0a    font-size: 24px;\x0a    color: var(--accent);\x0a}\x0a\x0a#branding h1, #branding h1 a:link, #branding h1 a:visited {\x0a    color: var(--accent);\x0a}\x0a\x0a#branding h2 {\x0a    padding: 0 10px;\x0a    font-size: 14px;\x0a    margin: -8px 0 8px 0;\x0a    font-weight: normal;\x0a    color: var(--header-color);\x0a}\x0a\x0a#branding a:hover {\x0a    text-decoration: none;\x0a}\x0a\x0a#user-tools {\x0a    float: right;\x0a    padding: 0;\x0a    margin: 0 0 0 20px;\x0a    font-weight: 300;\x0a    font-size: 11px;\x0a    letter-spacing: 0.5px;\x0a    text-transform: uppercase;\x0a    text-align: right;\x0a}\x0a\x0a#user-tools a {\x0a    border-bottom: 1px solid rgba(255, 255, 255, 0.25);\x0a}\x0a\x0a#user-tools a:focus, #user-tools a:hover {\x0a    text-decoration: none;\x0a    border-bottom-color: var(--primary);\x0a    color: var(--primary);\x0a}\x0a\x0a/* SIDEBAR */\x0a\x0a#content-related {\x0a    background: var(--darkened-bg);\x0a}\x0a\x0a#content-related .module {\x0a    background: none;\x0a}\x0a\x0a#content-related h3 {\x0a    color: var(--body-quiet-color);\x0a    padding: 0 16px;\x0a    margin: 0 0 16px;\x0a}\x0a\x0a#content-related h4 {\x0a    font-size: 13px;\x0a}\x0a\x0a#content-related p {\x0a    padding-left: 16px;\x0a    padding-right: 16px;\x0a}\x0a\x0a#content-related .actionlist {\x0a    padding: 0;\x0a    margin: 16px;\x0a}\x0a\x0a#content-related .actionlist li {\x0a    line-height: 1.2;\x0a    margin-bottom: 10px;\x0a    padding-left: 18px;\x0a}\x0a\x0a#content-related .module h2 {\x0a    background: none;\x0a    padding: 16px;\x0a    margin-bottom: 16px;\x0a    border-bottom: 1px solid var(--hairline-color);\x0a    font-size: 18px;\x0a    color: var(--body-fg);\x0a}\x0a\x0a.delete-confirmation form input[type=\x22submit\x22] {\x0a    background: var(--delete-button-bg);\x0a    border-radius: 4px;\x0a    padding: 10px 15px;\x0a    color: var(--button-fg);\x0a}\x0a\x0a.delete-confirmation form input[type=\x22submit\x22]:active,\x0a.delete-confirmation form input[type=\x22submit\x22]:focus,\x0a.delete-confirmation form input[type=\x22submit\x22]:hover {\x0a    background: var(--delete-button-hover-bg);\x0a}\x0a\x0a.delete-confirmation form .cancel-link {\x0a    display: inline-block;\x0a    vertical-align: middle;\x0a    height: 15px;\x0a    line-height: 15px;\x0a    border-radius: 4px;\x0a    padding: 10px 15px;\x0a    color: var(--button-fg);\x0a    background: var(--close-button-bg);\x0a    margin: 0 0 0 10px;\x0a}\x0a\x0a.delete-confirmation form .cancel-link:active,\x0a.delete-confirmation form .cancel-link:focus,\x0a.delete-confirmation form .cancel-link:hover {\x0a    background: var(--close-button-hover-bg);\x0a}\x0a\x0a/* POPUP */\x0a.popup #content {\x0a    padding: 20px;\x0a}\x0a\x0a.popup #container {\x0a    min-width: 0;\x0a}\x0a\x0a.popup #header {\x0a    padding: 10px 20px;\x0a}\x0a         \xd1'}