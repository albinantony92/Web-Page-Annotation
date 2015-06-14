
#Chrome Annotation Extension 

This is an implementation of Google Chrome Annotation Extension. Extensions are small software programs that can modify and enhance the functionality of the Chrome browser.
This Extension is capable of implementing Annotation, Free Hand Drawing on web pages on the fly, using canvas feature. It can be used for web apps and for presentation purposes.

#### Version: 
1.0

#### Author: 
albinantony (Albin Antony)

###Basic Setup

1. Install Chrome latest version (Version 39.0 or above).
2. Open the Chrome Menu and select the More tools->Extension option. You can also do this by going directly to chrome://extensions/ on your Chrome browser.
3. Enable Developer mode
4. Clone the annotator to a directory of your choice.
5. On the Chrome extensions page, click on Load unpacked extension. Browse to the directory where you cloned the annotator.

###How to use?
1. Click on the extension icon.
2. Click on annotation to append the canvas on web pages for annotating/marking.
3. To clear the annotation click on clear tab appended on the web page.
4. To close the canvas, click on close icon appended on web page.

###Features

1. It can be used to annotate/mark any web pages on the fly.
2. Implements Free Hand Drawing on web pages.

Include jQuery ,

	<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.0.min.js" />

### Resources

    <script src="../src/js/background.js"></script>
	<script src="../src/js/HandDrawing.js"></script>
    <link rel="styleSheet" href="../src/css/Annotation.css">
    	<link rel="styleSheet" href="../src/css/injectStyle.css">

### Dependency

    <script src="../src/lib/jquery-1.9.0.min.js"></script>
***
