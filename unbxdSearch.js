var unbxdSearchInit = function(a, b) {
    window.Unbxd = window.Unbxd || {},
    Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
        var c;
        if (null  == this)
            throw new TypeError('"this" is null or not defined');
        var d = Object(this)
          , e = d.length >>> 0;
        if (0 === e)
            return -1;
        var f = +b || 0;
        if (Math.abs(f) === 1 / 0 && (f = 0),
        f >= e)
            return -1;
        for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); e > c; ) {
            if (c in d && d[c] === a)
                return c;
            c++
        }
        return -1
    }
    ),
    function() {
        "use strict";
        var a = Array.prototype.slice;
        try {
            a.call(document.documentElement)
        } catch (b) {
            Array.prototype.slice = function(b, c) {
                if (c = "undefined" != typeof c ? c : this.length,
                "[object Array]" === Object.prototype.toString.call(this))
                    return a.call(this, b, c);
                var d, e, f = [], g = this.length, h = b || 0;
                h = h >= 0 ? h : Math.max(0, g + h);
                var i = "number" == typeof c ? Math.min(c, g) : g;
                if (0 > c && (i = g + c),
                e = i - h,
                e > 0)
                    if (f = new Array(e),
                    this.charAt)
                        for (d = 0; e > d; d++)
                            f[d] = this.charAt(h + d);
                    else
                        for (d = 0; e > d; d++)
                            f[d] = this[h + d];
                return f
            }
        }
    }
    (),
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        if ("function" != typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1)
          , c = this
          , d = function() {}
          , e = function() {
            return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
        }
        ;
        return d.prototype = this.prototype,
        e.prototype = new d,
        e
    }
    ),
    Array.prototype.map || (Array.prototype.map = function(a, b) {
        var c, d, e;
        if (null  == this)
            throw new TypeError(" this is null or not defined");
        var f = Object(this)
          , g = f.length >>> 0;
        if ("function" != typeof a)
            throw new TypeError(a + " is not a function");
        for (arguments.length > 1 && (c = b),
        d = new Array(g),
        e = 0; g > e; ) {
            var h, i;
            e in f && (h = f[e],
            i = a.call(c, h, e, f),
            d[e] = i),
            e++
        }
        return d
    }
    ),
    Array.prototype.filter || (Array.prototype.filter = function(a) {
        "use strict";
        if (void 0 === this || null  === this)
            throw new TypeError;
        var b = Object(this)
          , c = b.length >>> 0;
        if ("function" != typeof a)
            throw new TypeError;
        for (var d = [], e = arguments.length >= 2 ? arguments[1] : void 0, f = 0; c > f; f++)
            if (f in b) {
                var g = b[f];
                a.call(e, g, f, b) && d.push(g)
            }
        return d
    }
    ),
    Array.prototype.reduce || (Array.prototype.reduce = function(a) {
        "use strict";
        if (null  == this)
            throw new TypeError("Array.prototype.reduce called on null or undefined");
        if ("function" != typeof a)
            throw new TypeError(a + " is not a function");
        var b, c = Object(this), d = c.length >>> 0, e = 0;
        if (2 == arguments.length)
            b = arguments[1];
        else {
            for (; d > e && !(e in c); )
                e++;
            if (e >= d)
                throw new TypeError("Reduce of empty array with no initial value");
            b = c[e++]
        }
        for (; d > e; e++)
            e in c && (b = a(b, c[e], e, c));
        return b
    }
    ),
    Object.keys || (Object.keys = function(a) {
        if (a !== Object(a))
            throw new TypeError("Object.keys called on a non-object");
        var b, c = [];
        for (b in a)
            Object.prototype.hasOwnProperty.call(a, b) && c.push(b);
        return c
    }
    ),
    Array.prototype.getUnique = function() {
        for (var a = {}, b = [], c = 0, d = this.length; d > c; ++c)
            a.hasOwnProperty(this[c]) || (b.push(this[c]),
            a[this[c]] = 1);
        return b
    }
    ,
    "function" != typeof String.prototype.trim && (String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, "")
    }
    ),
    Unbxd.setSearch = function(b) {
        this.options = a.extend({}, this.defaultOptions, b),
        this.init()
    }
    ,
    b.registerHelper("prepareFacetName", function(a) {
        return a = a.replace("_fq", ""),
        a.replace("_", " ")
    }
    ),
    b.registerHelper("prepareFacetValue", function(a) {
        return a.trim().length > 0 ? a : "&nbsp;&nbsp;&nbsp;"
    }
    ),
    Unbxd.setSearch.prototype.defaultOptions = {
        inputSelector: "#search_query",
        searchButtonSelector: "#search_button",
        type: "search",
        getCategoryId: "",
        deferInitRender: [],
        spellCheck: "",
        spellCheckTemp: "<h3>Did you mean : {{suggestion}}</h3>",
        searchQueryDisplay: "",
        searchQueryDisplayTemp: "<h3>Search results for {{query}} - {{numberOfProducts}}</h3>",
        searchResultContainer: "",
        searchResultSetTemp: "",
        isAutoScroll: !1,
        isClickNScroll: !1,
        isPagination: !1,
        setPagination: function(a, b, c) {},
        paginationContainerSelector: "",
        paginationTemp: ["{{#if hasFirst}}", '<span class="unbxd_first" unbxdaction="first"> &laquo; </span>', "{{/if}}", "{{#if hasPrev}}", '<span class="unbxd_prev" unbxdaction="prev"> &lt; </span>', "{{/if}}", "{{#pages}}", "{{#if current}}", '<span class="unbxd_page highlight"> {{page}} </span>', "{{else}}", '<span class="unbxd_page" unbxdaction="{{page}}"> {{page}} </span>', "{{/if}}", "{{/pages}}", '<span class="unbxd_pageof"> of </span>', '<span class="unbxd_totalPages" unbxdaction="{{totalPages}}">{{totalPages}}</span>', "{{#if hasNext}}", '<span class="unbxd_next" unbxdaction="next"> &gt; </span>', "{{/if}}", "{{#if hasLast}}", '<span class="unbxd_last" unbxdaction="last">&raquo;</span>', "{{/if}}"].join(""),
        clickNScrollElementSelector: "#load-more",
        facetMultiSelect: !0,
        facetContainerSelector: "",
        facetCheckBoxSelector: "",
        selectedFacetTemp: ["{{#each filters}}", "<ol>", "<li>", '<span class="label">{{prepareFacetName @key}}:</span>', "{{#each this}}", '<div class="refineSect">{{@key}}<a href="#" class="btn-remove"></a>', "</div>", "{{/each}}", "</li>", "</ol>", "{{/each}}"].join(""),
        selectedFacetContainerSelector: "",
        clearSelectedFacetsSelector: "",
        removeSelectedFacetSelector: "",
        loaderSelector: "",
        onFacetLoad: "",
        onIntialResultLoad: "",
        onPageLoad: "",
        sanitizeQueryString: function(a) {
            return a
        },
        getFacetStats: "",
        processFacetStats: function(a) {},
        setDefaultFilters: function() {},
        enableBuckets: !1,
        noOfBuckets: 5,
        bucketSize: 5,
        bucketField: "",
        bucketResultSetTemp: "",
        fields: [],
        onNoResult: function(a) {},
        noEncoding: !1,
        heightDiffToTriggerNextPage: 100,
        customReset: function() {},
        bannerSelector: "",
        bannerTemp: '<a href="{{landingUrl}}"><img src="{{imageUrl}}"/></a>',
        bannerCount: 1,
        sortContainerSelector: "",
        sortOptions: [{
            name: "Relevancy"
        }, {
            name: "Price: H-L",
            field: "price",
            order: "desc"
        }, {
            name: "Price: L-H",
            field: "price",
            order: "asc"
        }],
        sortContainerType: "select",
        sortContainerTemp: ["<select>", "{{#options}}", "{{#if selected}}", '<option value="{{field}}-{{order}}" unbxdsortField="{{field}}" unbxdsortValue="{{order}}" selected>{{name}}</option>', "{{else}}", '<option value="{{field}}-{{order}}" unbxdsortField="{{field}}" unbxdsortValue="{{order}}">{{name}}</option>', "{{/if}}", "{{/options}}", "</select>"].join(""),
        pageSize: 12,
        pageSizeContainerSelector: "",
        pageSizeOptions: [{
            name: "12",
            value: "12"
        }, {
            name: "24",
            value: "24"
        }],
        pageSizeContainerType: "select",
        pageSizeContainerTemp: ["<select>", "{{#options}}", "{{#if selected}}", '<option value="{{value}}" selected unbxdpageSize="{{value}}">{{name}}</option>', "{{else}}", '<option value="{{value}}" unbxdpageSize="{{value}}">{{name}}</option>', "{{/if}}", "{{/options}}", "</select>"].join(""),
        viewTypeContainerTemp: ["{{#options}}", '<li class="unbxd-{{#if selected}}current{{/if}}">', '<a title="{{value}} View" class="unbxd-{{value}}view-button" {{#unless selected}}unbxdviewtype="{{value}}"{{/unless}}>', '<span class="icon-{{value}}view">', "{{value}}", "</span>", "</a>", "</li>", "{{/options}}"].join("")
    },
    a.extend(Unbxd.setSearch.prototype, {
        compiledResultTemp: !1,
        compiledSpellCheckTemp: !1,
        compiledSearchQueryTemp: !1,
        compiledFacetTemp: !1,
        compiledSelectedFacetTemp: !1,
        compiledBannerTemp: !1,
        compiledSortContainerTemp: !1,
        compiledPageSizeContainerTemp: !1,
        compiledPaginationTemp: !1,
        currentNumberOfProducts: 0,
        totalNumberOfProducts: 0,
        productStartIdx: 0,
        productEndIdx: 0,
        totalPages: 0,
        isLoading: !1,
        params: {
            query: "*",
            filters: {},
            ranges: {},
            sort: {},
            categoryId: "",
            extra: {
                format: "json",
                page: 1,
                rows: 0
            }
        },
        defaultParams: {},
        isHistory: !(!window.history || !history.pushState),
        popped: !1,
        initialURL: "",
        isHashChange: !1,
        currentHash: "",
        hashChangeInterval: null ,
        ajaxCall: null ,
        init: function() {
            if (this.isHashChange = !!("onhashchange" in window.document.body),
            this.$input = a(this.options.inputSelector),
            this.$input.val(""),
            this.input = this.$input[0],
            this.setEvents(),
            this.reset(),
            this.params.categoryId = "browse" == this.options.type && "function" == typeof this.options.getCategoryId ? this.options.getCategoryId() : "",
            this.params.categoryId.length > 0)
                "function" == typeof this.options.setDefaultFilters && this.setDefaultParams(this.params),
                this.setPage(1).setPageSize(this.options.pageSize),
                this.setBucketField(this.options.bucketField),
                this.callResults(this.paintResultSet);
            else if ("search" == this.options.type && this.input.value.trim().length)
                "function" == typeof this.options.setDefaultFilters && this.setDefaultParams(this.params),
                this.params.query = this.$input.val().trim(),
                -1 === this.options.deferInitRender.indexOf("search") && a(this.options.searchResultContainer).html(""),
                this.setPage(1).setPageSize(this.options.pageSize),
                this.callResults(this.paintResultSet);
            else {
                var b = this.getUrlSubstring()
                  , c = this.getQueryParams(b)
                  , d = /[^A-Za-z0-9\+\/\=]/g.test(b) ? {} : this.getQueryParams(this.decode(b))
                  , e = (Object.keys(c).length,
                Object.keys(d).length)
                  , f = null ;
                f = e > 0 ? this._processURL(d) : this._processURL(c),
                this.options.deferInitRender.indexOf("search") > -1 && !this.isUsingPagination() && f.extra.hasOwnProperty("page") && f.extra.page >= 1 && (f.extra.page = f.extra.page + 1),
                "search" == this.options.type ? (this.params = f,
                "function" == typeof this.options.setDefaultFilters && this.setDefaultParams(this.params),
                "query" in this.params && 0 != (this.params.query + "").trim().length || (this.params.query = "*"),
                this.params.query = this.options.sanitizeQueryString.call(this, this.params.query),
                this.$input.val("*" != this.params.query ? this.params.query : ""),
                -1 === this.options.deferInitRender.indexOf("search") && a(this.options.searchResultContainer).html(""),
                this.setPage("page" in f.extra ? f.extra.page : 1).setPageSize("rows" in f.extra ? f.extra.rows : this.options.pageSize),
                this.params.query && this.callResults(this.paintResultSet)) : "browse" == this.options.type && "categoryId" in f && f.categoryId.trim().length > 0 && (this.params = f,
                "function" == typeof this.options.setDefaultFilters && this.setDefaultParams(this.params),
                this.setPage("page" in f.extra ? f.extra.page : 1).setPageSize("rows" in f.extra ? f.extra.rows : this.options.pageSize),
                this.callResults(this.paintResultSet))
            }
        },
        getClass: function(a) {
            return Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]
        },
        setEvents: function() {
            var b = this
              , c = function(c) {
                c.preventDefault();
                var d = a(this)
                  , e = d.attr("unbxdviewtype");
                b.setViewType(e),
                e && b.options.viewTypes.indexOf(e) > -1 && b.callResults(b.paintOnlyResultSet, !0)
            }
              , d = function(c) {
                c.preventDefault();
                var d = a(this)
                  , e = "change" === c.type ? d.find(":selected") : c.currentTarget === c.target ? d : void 0
                  , f = e && e.attr("unbxdsortfield")
                  , g = e && e.attr("unbxdsortvalue");
                e && (b.resetSort().setPage(1),
                f && g && b.addSort(f, g),
                b.callResults(b.paintOnlyResultSet, !0))
            }
              , e = function(c) {
                c.preventDefault();
                var d = a(this)
                  , e = "change" === c.type ? d.find(":selected") : c.currentTarget === c.target ? d : void 0
                  , f = e && e.attr("unbxdpagesize");
                e && f && b.setPage(1).setPageSize(f).callResults(b.paintOnlyResultSet, !0)
            }
            ;
            "search" == this.options.type && ("form" in this.input && this.input.form ? a(this.input.form).bind("submit", function(c) {
                c.preventDefault(),
                b.reset(),
                b.params.query = b.options.sanitizeQueryString.call(b, b.input.value),
                -1 === b.options.deferInitRender.indexOf("search") && a(b.options.searchResultContainer).html(""),
                "function" == typeof b.options.setDefaultFilters && b.setDefaultParams(b.params),
                b.setPage(1).setPageSize(b.options.pageSize),
                b.params.query && b.callResults(b.paintResultSet, !0)
            }
            ) : (this.$input.bind("keydown", function(c) {
                13 == c.which && (c.preventDefault(),
                b.reset(),
                b.params.query = b.options.sanitizeQueryString.call(b, this.value),
                -1 === b.options.deferInitRender.indexOf("search") && a(b.options.searchResultContainer).html(""),
                "function" == typeof b.options.setDefaultFilters && b.setDefaultParams(b.params),
                b.clearFilters(!0).setPage(1).setPageSize(b.options.pageSize),
                b.params.query && b.callResults(b.paintResultSet, !0))
            }
            ),
            this.options.searchButtonSelector.length && a(this.options.searchButtonSelector).bind("click", function(c) {
                c.preventDefault(),
                b.reset(),
                b.params.query = b.options.sanitizeQueryString.call(b, b.input.value),
                -1 === b.options.deferInitRender.indexOf("search") && a(b.options.searchResultContainer).html(""),
                b.clearFilters(!0).setPage(1).setPageSize(b.options.pageSize),
                b.params.query && b.callResults(b.paintResultSet, !0)
            }
            ))),
            this.options.isClickNScroll && a(this.options.clickNScrollElementSelector).bind("click", function(a) {
                return b.enableBuckets ? !1 : (a.preventDefault(),
                b.setPage(b.getPage() + 1),
                void (b.params.query && b.callResults(b.paintProductPage)))
            }
            ),
            this.options.isAutoScroll && a(window).scroll(function() {
                if (b.enableBuckets)
                    return !1;
                var c = a(window)
                  , d = a(document);
                c.scrollTop() > d.height() - c.height() - b.options.heightDiffToTriggerNextPage && b.currentNumberOfProducts < b.totalNumberOfProducts && !b.isLoading && b.setPage(b.getPage() + 1).callResults(b.paintProductPage)
            }
            ),
            this.options.facetContainerSelector.length > 0 && a(this.options.facetContainerSelector).delegate(b.options.facetCheckBoxSelector, "change", function(c) {
                var d = a(this)
                  , e = d.parents(b.options.facetElementSelector)
                  , f = d.attr("unbxdParam_facetName")
                  , g = d.attr("unbxdParam_facetValue")
                  , h = g.split(" TO ");
                d.is(":checked") && "function" == typeof b.options.facetOnSelect && b.options.facetOnSelect(e),
                d.is(":checked") || "function" != typeof b.options.facetOnDeselect || b.options.facetOnDeselect(e),
                h.length > 1 ? b[d.is(":checked") ? "addRangeFilter" : "removeRangeFilter"](f, h[0], h[1]) : b[d.is(":checked") ? "addFilter" : "removeFilter"](f, g),
                b.setPage(1).callResults(b.paintResultSet, !0)
            }
            ),
            this.options.clearSelectedFacetsSelector.length > 0 && a("body").delegate(this.options.clearSelectedFacetsSelector, "click", function(a) {
                a.preventDefault(),
                b.clearFilters(!0).setPage(1).callResults(b.paintResultSet, !0)
            }
            ),
            this.options.removeSelectedFacetSelector.length > 0 && a(this.options.selectedFacetContainerSelector).delegate(this.options.removeSelectedFacetSelector, "click", function(c) {
                c.preventDefault();
                var d = a(this)
                  , e = d.attr("unbxdParam_facetName")
                  , f = d.attr("unbxdParam_facetValue")
                  , g = f.split(" TO ")
                  , h = b.options.facetCheckBoxSelector + "[unbxdParam_facetName='" + e + "'][unbxdParam_facetValue='" + f + "']";
                a(h).removeAttr("checked"),
                "function" == typeof b.options.facetOnDeselect && b.options.facetOnDeselect(a(h).parents(b.options.facetElementSelector)),
                g.length > 1 ? b.removeRangeFilter(e, g[0], g[1]) : b.removeFilter(e, f),
                b.setPage(1).callResults(b.paintResultSet, !0)
            }
            ),
            this.options.sortContainerSelector.length > 0 && ("select" === this.options.sortContainerType ? a(this.options.sortContainerSelector).on({
                change: d
            }, "*") : "click" === this.options.sortContainerType && a(this.options.sortContainerSelector).on({
                click: d
            }, "[unbxdsortfield]")),
            this.options.pageSizeContainerSelector.length > 0 && ("select" === this.options.pageSizeContainerType ? a(this.options.pageSizeContainerSelector).on({
                change: e
            }, "*") : "click" === this.options.pageSizeContainerType && a(this.options.pageSizeContainerSelector).on({
                click: e
            }, "[unbxdpagesize]"),
            a(this.options.pageSizeContainerSelector).delegate("*", "change", function(a) {}
            )),
            this.options.paginationContainerSelector.length > 0 && a(this.options.paginationContainerSelector).delegate("*", "click", function(c) {
                c.preventDefault();
                var d = a(this)
                  , e = {
                    first: 1,
                    prev: b.getPage() - 1,
                    next: b.getPage() + 1,
                    last: b.totalPages
                }
                  , f = d.attr("unbxdaction") || "";
                f && (e[f] ? b.setPage(e[f]) : isNaN(parseInt(f, 10)) || b.setPage(parseInt(f, 10)),
                b.callResults(b.paintOnlyResultSet, !0))
            }
            ),
            this.isHistory ? (b.popped = "state" in window.history,
            b.initialURL = location.href,
            a(window).bind("popstate", function(a) {
                var c = b.popped && location.href == b.initialURL;
                if (b.popped = !1,
                c || !a.originalEvent.state)
                    return void b.init();
                var d = a.originalEvent.state;
                d.query = "search" == b.options.type ? b.options.sanitizeQueryString.call(b, d.query) : "",
                b.reset(),
                b.setPage(1),
                (d.query || d.categoryId) && (b.params = d,
                b.callResults(b.paintResultSet))
            }
            )) : this.isHashChange ? a(window).bind("hashchange", function(a) {
                var c = window.location.hash.substring(1);
                if (c && c != b.currentHash) {
                    b.reset();
                    var d = b._processURL(b.options.noEncoding ? c : b.decode(c));
                    d.query = "search" == b.options.type ? b.options.sanitizeQueryString.call(b, d.query) : "",
                    b.currentHash = c,
                    (d.query || d.categoryId) && (b.params = d,
                    b.callResults(b.paintResultSet))
                } else
                    b.init()
            }
            ) : b.hashChangeInterval = setInterval(function() {
                var a = location.hash.substring(1);
                if (a && a != b.currentHash) {
                    b.reset();
                    var c = b._processURL(b.options.noEncoding ? a : b.decode(a));
                    c.query = "search" == b.options.type ? b.options.sanitizeQueryString.call(b, c.query) : "",
                    b.currentHash = a,
                    (c.query || c.categoryId) && (b.params = c,
                    b.callResults(b.paintResultSet))
                }
            }
            , 3e3),
            null  !== this.options.searchResultSetTemp && "object" == typeof this.options.searchResultSetTemp && a(this.options.viewTypeContainerSelector).on("click", "[unbxdviewtype]", c)
        },
        addSort: function(a, b) {
            return this.params.sort[a] = b || "desc",
            this
        },
        removeSort: function(a) {
            return a in this.params.sort && delete this.params.sort[a],
            this
        },
        resetSort: function() {
            return this.params.sort = {},
            this
        },
        addFilter: function(a, b) {
            return a in this.params.filters || (this.params.filters[a] = {}),
            this.params.filters[a][b] = a,
            this
        },
        removeFilter: function(a, b) {
            return b in this.params.filters[a] && delete this.params.filters[a][b],
            0 == Object.keys(this.params.filters[a]).length && delete this.params.filters[a],
            this
        },
        clearFilters: function(a) {
            return this.params.filters = {},
            a && this.clearRangeFiltes(),
            this
        },
        addRangeFilter: function(a, b, c) {
            return a in this.params.ranges || (this.params.ranges[a] = {}),
            this.params.ranges[a][b + " TO " + c] = {
                lb: b || "*",
                ub: c || "*"
            },
            this
        },
        removeRangeFilter: function(a, b, c) {
            return !b && !c && a in this.params.ranges && delete this.params.ranges[a],
            b && c && a in this.params.ranges && b + " TO " + c in this.params.ranges[a] && delete this.params.ranges[a][b + " TO " + c],
            0 == Object.keys(this.params.ranges[a]).length && delete this.params.ranges[a],
            this
        },
        clearRangeFiltes: function() {
            return this.params.ranges = {},
            this
        },
        setPage: function(a) {
            return this.params.extra.page = a,
            this
        },
        setBucketField: function(a) {
            return this.options.bucketField = a,
            this
        },
        getBucketField: function() {
            return this.options.bucketField
        },
        getPage: function() {
            return this.params.extra.page
        },
        setPageSize: function(a) {
            return this.params.extra.rows = a,
            this
        },
        getPageSize: function() {
            return this.params.extra.rows
        },
        setViewType: function(a) {
            return this.params.extra.view = a,
            this
        },
        getViewType: function() {
            return this.params.extra.view
        },
        addQueryParam: function(a, b, c) {
            return a in this.params.extra && c ? ("Array" != this.getClass(this.params.extra[a]) && (this.params.extra[a] = [this.params.extra[a]]),
            this.params.extra[a].push(b)) : this.params.extra[a] = b,
            this
        },
        isUsingPagination: function() {
            return !this.options.isAutoScroll && this.options.isPagination
        },
        getHostNPath: function() {
            return "//search.unbxdapi.com/" + this.options.APIKey + "/" + this.options.siteName + "/" + ("browse" == this.options.type ? "browse" : "search")
        },
        getUrlSubstring: function() {
            return window.location.hash.substring(1) || window.location.search.substring(1)
        },
        url: function() {
            var a = this.getHostNPath()
              , b = ""
              , c = "";
            "search" == this.options.type && void 0 != this.params.query ? b += "&q=" + encodeURIComponent(this.params.query) : "browse" == this.options.type && void 0 != this.params.categoryId && (b += "&category-id=" + encodeURIComponent(this.params.categoryId));
            for (var d in this.params.filters)
                if (this.params.filters.hasOwnProperty(d)) {
                    var e = []
                      , f = [];
                    for (var g in this.params.filters[d])
                        this.defaultParams.hasOwnProperty("filters") && this.defaultParams.filters.hasOwnProperty(d) && this.defaultParams.filters[d].hasOwnProperty(g) && this.params.filters[d].hasOwnProperty(g) ? f.push((d + ':"' + encodeURIComponent(g.replace(/\"/g, '\\"')) + '"').replace(/\"{2,}/g, '"')) : this.params.filters[d].hasOwnProperty(g) && e.push((d + ':"' + encodeURIComponent(g.replace(/\"/g, '\\"')) + '"').replace(/\"{2,}/g, '"'));
                    e.length > 0 ? b += "&filter=" + e.join(" OR ") + f.join(" OR ") : f.length > 0 && (c += "&filter=" + f.join(" OR "))
                }
            for (var d in this.params.ranges) {
                var e = []
                  , f = [];
                for (var g in this.params.ranges[d])
                    this.defaultParams.hasOwnProperty("ranges") && this.defaultParams.ranges.hasOwnProperty(d) && this.defaultParams.ranges[d].hasOwnProperty(g) && this.params.ranges[d].hasOwnProperty(g) ? f.push(d + ":[" + this.params.ranges[d][g].lb + " TO " + this.params.ranges[d][g].ub + "]") : this.params.ranges[d].hasOwnProperty(g) && e.push(d + ":[" + this.params.ranges[d][g].lb + " TO " + this.params.ranges[d][g].ub + "]");
                e.length > 0 ? b += "&filter=" + e.join(" OR ") + f.join(" OR ") : f.length > 0 && (c += "&filter=" + f.join(" OR "))
            }
            var e = []
              , f = [];
            for (var h in this.params.sort)
                if (this.defaultParams.hasOwnProperty("sort") && this.defaultParams.sort.hasOwnProperty(h) && this.params.sort.hasOwnProperty(h)) {
                    var i = this.params.sort[h] || "desc";
                    f.push(h + " " + i)
                } else if (this.params.sort.hasOwnProperty(h)) {
                    var i = this.params.sort[h] || "desc";
                    e.push(h + " " + i)
                }
            e.length && (b += "&sort=" + e.join(",")),
            f.length && (c += "&sort=" + f.join(","));
            for (var j in this.params.extra)
                if (this.params.extra.hasOwnProperty(j) && "page" != j) {
                    var k = this.params.extra[j];
                    if ("Array" == this.getClass(k)) {
                        k = k.getUnique();
                        for (var l = 0; l < k.length; l++)
                            b += "&" + j + "=" + encodeURIComponent(k[l])
                    } else
                        "wt" === j || "format" === j ? c += "&" + j + "=" + encodeURIComponent(k) : this.isUsingPagination() && "rows" === j || "view" === j ? b += "&" + j + "=" + encodeURIComponent(k) : this.defaultParams.hasOwnProperty("extra") && this.defaultParams.extra.hasOwnProperty(j) ? c += "&" + j + "=" + encodeURIComponent(k) : b += "&" + j + "=" + encodeURIComponent(k)
                }
            return this.isUsingPagination() ? b += "&start=" + (this.params.extra.page <= 1 ? 0 : (this.params.extra.page - 1) * this.params.extra.rows) : c += "&start=" + (this.params.extra.page <= 1 ? 0 : (this.params.extra.page - 1) * this.params.extra.rows),
            c += this.options.getFacetStats.length > 0 ? "&stats=" + this.options.getFacetStats : "",
            this.options.fields.length && (c += "&fields=" + this.options.fields.join(",")),
            this.options.enableBuckets && (b += "&bucket.field=" + this.getBucketField(),
            b += "&rows=" + this.options.noOfBuckets,
            b += "&bucket.limit=" + this.options.bucketSize),
            this.options.facetMultiSelect && (c += "&facet.multiselect=true"),
            c += "&indent=off",
            {
                url: a + "?" + b + c,
                query: b,
                host: a
            }
        },
        callResults: function(b, c) {
            this.isLoading && this.ajaxCall.abort(),
            this.isLoading = !0,
            this.options.loaderSelector.length > 0 && a(this.options.loaderSelector).show();
            var d = this
              , e = b.bind(d)
              , f = function(b) {
                return this.isLoading = !1,
                this.options.loaderSelector.length > 0 && a(this.options.loaderSelector).hide(),
                "error" in b ? !1 : void e(b)
            }
              , g = d.url();
            if (c) {
                var h = this.options.noEncoding ? g.query : this.encode(g.query);
                this.isHistory ? history.pushState(this.params, null , location.protocol + "//" + location.host + location.pathname + "?" + h) : (window.location.hash = h,
                this.currentHash = h)
            }
            this.ajaxCall = a.ajax({
                url: g.url,
                dataType: "jsonp",
                jsonp: "json.wrf",
                success: f.bind(d)
            })
        },
        reset: function() {
            return this.totalNumberOfProducts = 0,
            this.currentNumberOfProducts = 0,
            a(this.options.spellCheck).hide(),
            a(this.options.searchQueryDisplay).empty(),
            -1 === this.options.deferInitRender.indexOf("search") && a(this.options.searchResultContainer).empty(),
            a(this.options.facetContainerSelector).empty(),
            this.options.selectedFacetHolderSelector && a(this.options.selectedFacetHolderSelector).hide(),
            this.options.loaderSelector.length > 0 && a(this.options.loaderSelector).hide(),
            this.params = {
                query: "*",
                filters: {},
                sort: {},
                ranges: {},
                categoryId: "",
                extra: {
                    format: "json",
                    page: 1,
                    rows: 12,
                    view: void 0 !== this.options.viewTypes && this.options.viewTypes.length > 0 ? this.options.viewTypes[0] : ""
                }
            },
            "function" == typeof this.options.customReset && this.options.customReset.call(this),
            this
        },
        setDefaultParams: function(b) {
            this.options.setDefaultFilters.call(this),
            0 === Object.keys(this.defaultParams).length && (this.defaultParams = a.extend(!0, {}, this.params))
        },
        _processURL: function(a) {
            var b = "string" == typeof a ? this.getQueryParams(a) : a
              , c = {
                query: "",
                filters: {},
                sort: {},
                ranges: {},
                extra: {
                    wt: "json",
                    page: 1,
                    rows: 12
                }
            };
            if ("filter" in b) {
                "String" == this.getClass(b.filter) && (b.filter = Array(b.filter));
                for (var d = 0; d < b.filter.length; d++)
                    for (var e = b.filter[d].split(" OR "), f = 0; f < e.length; f++) {
                        var g = e[f].split(":");
                        if (2 == g.length) {
                            g[1] = g[1].replace(/\"{2,}/g, '"').replace(/(^")|("$)/g, "").replace(/(^\[)|(\]$)/g, "");
                            var h = g[1].split(" TO ");
                            h.length > 1 ? (g[0] in c.ranges || (c.ranges[g[0]] = {}),
                            c.ranges[g[0]][g[1]] = {
                                lb: isNaN(parseFloat(h[0])) ? "*" : parseFloat(h[0]),
                                ub: isNaN(parseFloat(h[1])) ? "*" : parseFloat(h[1])
                            }) : (g[0] in c.filters || (c.filters[g[0]] = {}),
                            c.filters[g[0]][g[1]] = g[0])
                        }
                    }
            }
            if ("sort" in b)
                for (var i = b.sort.split(","), d = 0; d < i.length; d++) {
                    var g = i[d].split(/\s+(?=\S+$)/);
                    2 == g.length && (c.sort[g[0]] = g[1] || "desc")
                }
            return "rows" in b ? c.extra.rows = parseInt(b.rows) : c.extra.rows = this.options.pageSize,
            "q" in b && (c.query = b.q),
            "category-id" in b && (c.categoryId = b["category-id"]),
            "boost" in b && (c.extra.boost = b.boost),
            "start" in b && (c.extra.page = parseInt(b.start) / parseInt(c.extra.rows) + 1),
            "view" in b ? c.extra.view = b.view : c.extra.view = void 0 !== this.options.viewTypes && this.options.viewTypes.length > 0 ? this.options.viewTypes[0] : "",
            c
        },
        paintResultSet: function(a) {
            this._internalPaintResultSet(a, !0)
        },
        _internalPaintResultSet: function(c, d) {
            return "error" in c ? !1 : (this.totalNumberOfProducts = 0,
            this.currentNumberOfProducts = 0,
            c.hasOwnProperty("banner") ? this.paintBanners(c) : this.options.bannerSelector.length && a(this.options.bannerSelector).empty(),
            void (c.hasOwnProperty("didYouMean") ? c.buckets && c.didYouMean[0].suggestion || c.response && 0 == c.response.numberOfProducts ? (this.params.extra.page > 1 && (this.params.extra.page = this.params.extra.page - 1),
            this.params.query = c.didYouMean[0].suggestion,
            this.compiledSpellCheckTemp || (this.compiledSpellCheckTemp = b.compile(this.options.spellCheckTemp)),
            a(this.options.spellCheck).html(this.compiledSpellCheckTemp({
                suggestion: c.didYouMean[0].suggestion
            })).show(),
            this.callResults(d ? this.paintAfterSpellCheck : this.paintOnlyResultSet)) : (this.params.query = c.searchMetaData.queryParams.q,
            this.compiledSpellCheckTemp || (this.compiledSpellCheckTemp = b.compile(this.options.spellCheckTemp)),
            a(this.options.spellCheck).html(this.compiledSpellCheckTemp({
                suggestion: c.didYouMean[0].suggestion
            })).show(),
            this.callResults(d ? this.paintAfterSpellCheck : this.paintOnlyResultSet)) : (a(this.options.spellCheck).hide(),
            -1 === this.options.deferInitRender.indexOf("search") && a(this.options.searchResultContainer).empty(),
            this.paintProductPage(c),
            d && this.paintFacets(c))))
        },
        paintOnlyResultSet: function(b) {
            -1 === this.options.deferInitRender.indexOf("search") && a(this.options.searchResultContainer).empty(),
            this.paintProductPage(b)
        },
        paintAfterSpellCheck: function(b) {
            -1 === this.options.deferInitRender.indexOf("search") && a(this.options.searchResultContainer).empty(),
            this.paintProductPage(b),
            this.paintFacets(b)
        },
        paintAfterFacetChange: function(b) {
            -1 === this.options.deferInitRender.indexOf("search") && a(this.options.searchResultContainer).empty(),
            this.paintProductPage(b),
            this.paintSelectedFacets()
        },
        paintProductPage: function(c) {
            var d = 1;
            if (!("error" in c)) {
                if (c.buckets && 0 == c.buckets.totalProducts || c.response && 0 == c.response.numberOfProducts)
                    return this.reset(),
                    this.options.onNoResult.call(this, c),
                    this;
                if (this.compiledSearchQueryTemp || (this.compiledSearchQueryTemp = b.compile(this.options.searchQueryDisplayTemp)),
                c.buckets || (this.productStartIdx = this.isUsingPagination() ? c.response.start + 1 : 1,
                this.productEndIdx = this.getPage() * this.getPageSize() <= c.response.numberOfProducts ? this.getPage() * this.getPageSize() : c.response.numberOfProducts,
                this.totalPages = Math.ceil(c.response.numberOfProducts / this.getPageSize())),
                a(this.options.searchQueryDisplay).html(this.compiledSearchQueryTemp({
                    query: c.searchMetaData.queryParams.q,
                    numberOfProducts: this.options.enableBuckets ? c.buckets.totalProducts : c.response.numberOfProducts,
                    start: this.productStartIdx,
                    end: this.productEndIdx
                })).show(),
                this.paintSort(c),
                this.paintPageSize(c),
                this.paintPagination(c),
                this.options.enableBuckets || (c.response.products = c.response.products.map(function(a) {
                    return a.unbxdprank = c.response.start + d,
                    d += 1,
                    a
                }
                )),
                this.options.enableBuckets) {
                    var e = [];
                    for (var f in c.buckets)
                        if (c.buckets.hasOwnProperty(f)) {
                            if ("totalProducts" === f || "numberOfBuckets" === f)
                                continue;e.push({
                                name: f,
                                numberOfProducts: c.buckets[f].numberOfProducts,
                                products: c.buckets[f].products
                            }),
                            console.log(typeof c.buckets[f].products.slice())
                        }
                    "Function" == this.getClass(this.options.bucketResultSetTemp) ? this.options.bucketResultSetTemp({
                        buckets: e
                    }) : (this.compiledBucketResultTemp || (this.compiledBucketResultTemp = b.compile(this.options.bucketResultSetTemp)),
                    a(this.options.searchResultContainer).append(this.compiledBucketResultTemp({
                        buckets: e,
                        query: c.searchMetaData.queryParams.q,
                        numberOfProducts: this.options.enableBuckets ? c.buckets.totalProducts : c.response.numberOfProducts
                    }))),
                    "function" == typeof this.options.onIntialResultLoad && this.options.onIntialResultLoad.call(this)
                } else
                    "Function" == this.getClass(this.options.searchResultSetTemp) ? this.options.searchResultSetTemp(c) : (this.compiledResultTemp || (this.compiledResultTemp = b.compile(this.options.searchResultSetTemp)),
                    a(this.options.searchResultContainer).append(this.compiledResultTemp(c.response))),
                    this.currentNumberOfProducts || "function" != typeof this.options.onIntialResultLoad || this.options.onIntialResultLoad.call(this),
                    this.currentNumberOfProducts && "function" == typeof this.options.onPageLoad && this.options.onPageLoad.call(this),
                    this.totalNumberOfProducts = c.response.numberOfProducts,
                    this.currentNumberOfProducts += c.response.products.length,
                    this.options.isClickNScroll && a(this.options.clickNScrollSelector)[this.currentNumberOfProducts < this.totalNumberOfProducts ? "show" : "hide"]()
            }
        },
        paintSort: function(c) {
            if (!("error" in c || this.options.sortContainerSelector.length <= 0)) {
                this.compiledSortContainerTemp || (this.compiledSortContainerTemp = b.compile(this.options.sortContainerTemp));
                var d = this.options.sortOptions.map(function(a) {
                    return a.selected = a.hasOwnProperty("field") && a.field in this.params.sort && this.params.sort[a.field] === a.order ? !0 : a.hasOwnProperty("field") || 0 !== Object.keys(this.params.sort).length ? !1 : !0,
                    a
                }
                .bind(this));
                a(this.options.sortContainerSelector).html(this.compiledSortContainerTemp({
                    options: d
                }))
            }
        },
        paintPageSize: function(c) {
            if (!("error" in c || this.options.pageSizeContainerSelector.length <= 0) && this.isUsingPagination()) {
                this.compiledPageSizeContainerTemp || (this.compiledPageSizeContainerTemp = b.compile(this.options.pageSizeContainerTemp));
                var d = this.options.pageSizeOptions.map(function(a) {
                    return a.selected = this.getPageSize() == a.value ? !0 : !1,
                    a
                }
                .bind(this));
                a(this.options.pageSizeContainerSelector).html(this.compiledPageSizeContainerTemp({
                    options: d
                }))
            }
        },
        paintViewTypes: function(c) {
            if (!("error" in c || this.options.viewTypeContainerSelector.length <= 0)) {
                this.compiledViewTypesContainerTemp || (this.compiledViewTypesContainerTemp = b.compile(this.options.viewTypeContainerTemp));
                var d = this.options.viewTypes.map(function(a) {
                    var b = {};
                    return b.value = a,
                    b.selected = this.getViewType() == a ? !0 : !1,
                    b
                }
                .bind(this));
                return a(this.options.viewTypeContainerSelector).html(this.compiledViewTypesContainerTemp({
                    options: d
                })),
                this.getViewType()
            }
        },
        paintPagination: function(c) {
            if (!("error" in c || this.options.paginationContainerSelector.length <= 0) && this.isUsingPagination()) {
                this.compiledPaginationTemp || (this.compiledPaginationTemp = b.compile(this.options.paginationTemp));
                var d = [{
                    page: this.getPage() - 2,
                    current: !1
                }, {
                    page: this.getPage() - 1,
                    current: !1
                }, {
                    page: this.getPage(),
                    current: !0
                }, {
                    page: this.getPage() + 1,
                    current: !1
                }, {
                    page: this.getPage() + 2,
                    current: !1
                }]
                  , e = d.filter(function(a) {
                    return a.page > 0 && a.page <= this.totalPages
                }
                .bind(this));
                a(this.options.paginationContainerSelector).html(this.compiledPaginationTemp({
                    hasFirst: this.getPage() > 1 ? !0 : !1,
                    hasPrev: this.getPage() > 1 ? !0 : !1,
                    pages: e,
                    totalPages: this.totalPages,
                    hasNext: this.getPage() < this.totalPages ? !0 : !1,
                    hasLast: this.getPage() < this.totalPages ? !0 : !1
                }))
            }
        },
        paintBanners: function(c) {
            if (!("error" in c || this.options.bannerCount <= 0 || 0 === this.options.bannerSelector.length)) {
                var d = c.banner
                  , e = [];
                this.compiledBannerTemp || (this.compiledBannerTemp = b.compile(this.options.bannerTemp)),
                e = d.banners.slice(0, this.options.bannerCount).reduce(function(a, b) {
                    return a.concat(this.compiledBannerTemp({
                        landingUrl: b.landingUrl,
                        imageUrl: b.imageUrl
                    }))
                }
                .bind(this), []),
                a(this.options.bannerSelector).html(e.join(""))
            }
        },
        paintFacets: function(c) {
            if (!("error" in c)) {
                if (!c.buckets && !c.response.numberOfProducts)
                    return this;
                var d = c.facets
                  , e = (Object.keys(d),
                [])
                  , f = []
                  , g = {}
                  , h = this
                  , i = ""
                  , j = ""
                  , k = ""
                  , l = !1;
                for (var m in d)
                    if (g = {
                        name: h.prepareFacetName(m),
                        facet_name: m,
                        type: d[m].type,
                        selected: [],
                        unselected: [],
                        unordered: []
                    },
                    "facet_ranges" !== g.type) {
                        for (var n = 0, o = d[m].values.length / 2; o > n; n++)
                            i = d[m].values[2 * n],
                            0 != i.trim().length && (l = m in h.params.filters && i in h.params.filters[m] && h.params.filters[m][i] == m ? !0 : !1,
                            g[l ? "selected" : "unselected"].push({
                                value: i,
                                count: d[m].values[2 * n + 1]
                            }),
                            g.unordered.push({
                                value: i,
                                count: d[m].values[2 * n + 1],
                                isSelected: l
                            }));
                        g.unordered.length > 0 && e.push(g)
                    } else {
                        for (var n = 0, o = d[m].values.counts.length / 2; o > n; n++) {
                            j = parseFloat(d[m].values.counts[2 * n]).toString(),
                            k = (parseFloat(j) + d[m].values.gap).toString();
                            var p = j + " TO " + k;
                            l = m in h.params.ranges && p in h.params.ranges[m] && h.params.ranges[m][p].lb == j && h.params.ranges[m][p].ub == k ? !0 : !1,
                            g[l ? "selected" : "unselected"].push({
                                begin: j,
                                end: k,
                                count: d[m].values.counts[2 * n + 1],
                                value: p
                            }),
                            g.unordered.push({
                                begin: j,
                                end: k,
                                count: d[m].values.counts[2 * n + 1],
                                value: p,
                                isSelected: l
                            })
                        }
                        g.unordered.length > 0 && f.push(g)
                    }
                if ("Function" == this.getClass(this.options.facetTemp) ? this.options.facetTemp.call(this, {
                    facets: e,
                    rangefacets: f
                }) : (!this.compiledFacetTemp && this.options.facetTemp.length && (this.compiledFacetTemp = b.compile(this.options.facetTemp)),
                this.options.facetContainerSelector.length && a(this.options.facetContainerSelector).html(this.compiledFacetTemp({
                    facets: e,
                    rangefacets: f
                }))),
                this.paintSelectedFacets(),
                this.options.deferInitRender.indexOf("search") > -1 && (this.options.deferInitRender = []),
                this.options.deferInitRender = [],
                "function" == typeof this.options.onFacetLoad && this.options.onFacetLoad.call(this, c),
                this.options.getFacetStats.length && "function" == typeof this.options.processFacetStats && "stats" in c && null  != c.stats[this.options.getFacetStats]) {
                    if (c.stats[this.options.getFacetStats].values = {
                        min: c.stats[this.options.getFacetStats].min,
                        max: c.stats[this.options.getFacetStats].max
                    },
                    this.options.getFacetStats in this.params.ranges)
                        for (var m in this.params.ranges[this.options.getFacetStats])
                            c.stats[this.options.getFacetStats].values = {
                                min: "*" != this.params.ranges[this.options.getFacetStats][m].lb ? this.params.ranges[this.options.getFacetStats][m].lb : c.stats[this.options.getFacetStats].min,
                                max: "*" != this.params.ranges[this.options.getFacetStats][m].ub ? this.params.ranges[this.options.getFacetStats][m].ub : c.stats[this.options.getFacetStats].max
                            };
                    this.options.processFacetStats.call(this, c.stats)
                }
            }
        },
        paintSelectedFacets: function() {
            var c = Math.max(Object.keys(this.params.filters).length, Object.keys(this.params.ranges).length)
              , d = {};
            if (c) {
                d.filters = this.params.filters,
                d.ranges = {};
                for (var e in this.params.ranges) {
                    d.ranges.hasOwnProperty(e) || (d.ranges[e] = {});
                    for (var f in this.params.ranges[e])
                        d.ranges[e][f] = e
                }
                this.options.selectedFacetTemp && this.options.selectedFacetContainerSelector && (this.compiledSelectedFacetTemp || (this.compiledSelectedFacetTemp = b.compile(this.options.selectedFacetTemp)),
                a(this.options.selectedFacetContainerSelector).html(this.compiledSelectedFacetTemp(d))),
                a(this.options.selectedFacetHolderSelector).show()
            } else
                a(this.options.selectedFacetContainerSelector).empty(),
                a(this.options.selectedFacetHolderSelector).hide()
        },
        prepareFacetName: function(a) {
            return a = a.replace("_fq", ""),
            a.replace("_", " ")
        },
        getQueryParams: function(a) {
            var b, c = function(a) {
                return decodeURIComponent(a.replace(/\+/g, " ")).trim()
            }
            , d = /([^&=]+)=?([^&]*)/g, e = {};
            for (a = a || this.getUrlSubstring(); b = d.exec(a); ) {
                var f = b[1].indexOf("[")
                  , g = "-1" == f ? b[1] : b[1].slice(0, f)
                  , h = ("-1" != f ? c(b[1].slice(f + 1, b[1].indexOf("]", f))) : "",
                c(b[2]));
                if (0 != h.length)
                    if (g in e) {
                        if ("object" != typeof e[g]) {
                            var i = e[g];
                            e[g] = Array(e[g]),
                            Array.prototype.push.call(e[g], i)
                        }
                        Array.prototype.push.call(e[g], h)
                    } else
                        e[g] = h
            }
            return e
        },
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(a) {
            var b, c, d, e, f, g, h, i = "", j = 0;
            for (a = this._utf8_encode(a); j < a.length; )
                b = a.charCodeAt(j++),
                c = a.charCodeAt(j++),
                d = a.charCodeAt(j++),
                e = b >> 2,
                f = (3 & b) << 4 | c >> 4,
                g = (15 & c) << 2 | d >> 6,
                h = 63 & d,
                isNaN(c) ? g = h = 64 : isNaN(d) && (h = 64),
                i = i + this._keyStr.charAt(e) + this._keyStr.charAt(f) + this._keyStr.charAt(g) + this._keyStr.charAt(h);
            return i
        },
        decode: function(a) {
            var b, c, d, e, f, g, h, i = "", j = 0;
            for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); j < a.length; )
                e = this._keyStr.indexOf(a.charAt(j++)),
                f = this._keyStr.indexOf(a.charAt(j++)),
                g = this._keyStr.indexOf(a.charAt(j++)),
                h = this._keyStr.indexOf(a.charAt(j++)),
                b = e << 2 | f >> 4,
                c = (15 & f) << 4 | g >> 2,
                d = (3 & g) << 6 | h,
                i += String.fromCharCode(b),
                64 != g && (i += String.fromCharCode(c)),
                64 != h && (i += String.fromCharCode(d));
            return i = this._utf8_decode(i)
        },
        _utf8_encode: function(a) {
            a = a.replace(/\r\n/g, "\n");
            for (var b = "", c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192),
                b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224),
                b += String.fromCharCode(d >> 6 & 63 | 128),
                b += String.fromCharCode(63 & d | 128))
            }
            return b
        },
        _utf8_decode: function(a) {
            for (var b = "", c = 0, d = c1 = c2 = 0; c < a.length; )
                d = a.charCodeAt(c),
                128 > d ? (b += String.fromCharCode(d),
                c++) : d > 191 && 224 > d ? (c2 = a.charCodeAt(c + 1),
                b += String.fromCharCode((31 & d) << 6 | 63 & c2),
                c += 2) : (c2 = a.charCodeAt(c + 1),
                c3 = a.charCodeAt(c + 2),
                b += String.fromCharCode((15 & d) << 12 | (63 & c2) << 6 | 63 & c3),
                c += 3);
            return b
        }
    })
}
;
if (!window.jQuery || !window.Handlebars)
    throw "Please include jQuery & Handlebars libraries before loading unbxdSearch.js";
var arr = jQuery.fn.jquery.split(".");
if (arr[0] < 1 || 1 == arr[0] && arr[1] < 7)
    throw "jQuery version needs to be greater than 1.7 to use unbxdSearch.js. You can pass custom jQuery & Handlebars by calling unbxdSeachInit(jQuery, Handlebars)";
unbxdSearchInit(jQuery, Handlebars);
