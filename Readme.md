# selenium-gherkin-formatter for Selenium IDE

## Requirement
 * [Firefox Developer Edition](https://www.mozilla.org/firefox/developer/)
Unsigned extension required can not be installed on Standard Firefox version
http://www.ghacks.net/2015/06/19/how-to-disable-the-firefox-40-add-on-signing-requirement/
* Enable unsigned extension : go to about:config

 * Install selenium-ide extension to Firefox
 * Enable Experimental features in selenium-ide (Options/options)

## Installation
 Open XPI file with Firefox Developer Edition


Based on selenium-wiki-formatter and html formatter included in selenium IDE.


Example:

# encoding="UTF-8"?>
#charset=UTF-8" />
#name=test</title>
Given I connect to "https://github.com/"
And    open    /filslo/selenium-gherkin-formatter    
And    click    id=ce60e70f9de430e6b7a551de3d651ed6-e02c0b43bf4827543faf23d6f390ed8e0e44a838    
And    click    id=55b558c7ef820e6e00e5993b9e55d93b-db3db93f06c9bb0845df2f23f256d2a88e4c010d    
