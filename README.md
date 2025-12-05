"# nodejs" 
# Notes

## Node project kasari start garney
    Folder banaune
    Folder ma janey ani cmd kholerw **npm init** garney terminal ma
    Teti garey pachi hamro euta package.json file banxa jasley chai project jo description dinxa
    Main file banauney, app.js huncha mainly  node ma, npm i express, rw express ko kura haru garney install express **npm intall express**

Problem 1: Manually node restart garnu paryo
Solution of P1:
                Traditional Solution: nodemon package  

                MISC:
                    npm install -g nodemon (Globally throughout the system)
                    npm install nodemon  (Locally euta kun project ma install gareko ma matra vayo)
                    npm i nodemon
                    npm i -g nodemon
                -g Stands For Global
                
                Modern Solution: Node Version 18.20 bata chai watch flag

                Node --watch flag for auto refresh
                (node --watch {yourFileName})


Problem 2: Code clean vayana bujena, dynamic content halna milena

    Solution: Template Engines
        Examples: EJS (Embedeed Javascript), Moustache, Pug, Handlebar

Danger :
    ejs ko main folder ko name 'views' hunu paryo compulsory