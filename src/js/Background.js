/**
* @classdesc This is used to load an extension to Google Chrome in developer mode. It consist of functions used to inject javascript, CSS to current Web Page DOM.
* @class background
*
* @example
* 
* $('#sketch').click(function() {
* chrome.tabs.executeScript(null, {file:"jquery-1.9.0.min.js"},
*        function() {
*        chrome.tabs.insertCSS(null, {file: "style.css"});
*        chrome.tabs.executeScript(null, {file:"file.js"});
*        });
*        });
*
* @author albinantony (Albin Antony)
* @version 1.0
*
* @license
* The MIT License (MIT)
*
* Copyright (c) 2015 albinantony
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/


$('#sketch').click(function(){
chrome.tabs.executeScript(null, {file:"lib/jquery-1.9.0.min.js"},
        function() {
        chrome.tabs.insertCSS(null, {file: "css/injectStyle.css"});
        chrome.tabs.executeScript(null, {file:"js/HandDrawing.js"});
        });
        });
        $('.menuItem').on('mousedown', function(){
$(this).css('background-color', '#3399FF');
        });
        $('.menuItem').on('mouseup', function(){
$(this).css('background-color', '#F0F0F0');
        });