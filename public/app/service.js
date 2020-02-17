let TREEFROG_SERVICE = (function() 
{

    let _getGetStartedContent = function()
    {
        let contentStr = `
            <h1>Get Started Content</h1>
            <p>This is the screen where you will create your navigation and page content.</p>
            <p>First, you will need to create a main navigation. Once you have created a main navigation you can create a sub-navigation if you would like to.</p>
            <p>Once you create either a nav or sub-nav a text editor will pop up and you will be allowed to create your page content.</p>
        `;

        return contentStr;
    }

    let _getCreateNavButtons = function()
    {
        let buttonString = `
            <span class="btn btn-dark main-nav">Create Main Nav</span>
            <span class="btn btn-dark sub-nav">Create Sub Nav</span>
        `;

        return buttonString;
    }

    let _getHomeContent = function()
    {
        let contentStr = `
            <h1>Welcome to the Treefrog CMS</h1>
            <p>
            Here you will create your content for your webpages. You won't be able
            to create all page elements but only the content for the page.
            </p>

            <p>
            You must first create the navigation. Once you have the navigation
            created you can add page content and publish the page. You can even
            add sub navigation as well.
            </p>

            <p>
            Your fist step is to click on the Add Navigation link and add your
            first navigation link.
            </p>
        `;

        return contentStr;
    }

    let _getHomeStartButton = function()
    {
        let buttonString = `
            <span class="btn btn-dark get-started">Get Started</span>
        `;

        return buttonString;
    }

    return {
        getGetStartedContent: _getGetStartedContent,
        getCreateNavButtons: _getCreateNavButtons,
        getHomeContent: _getHomeContent,
        getHomeStartButton: _getHomeStartButton
    }
})();