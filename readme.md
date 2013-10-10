## Local Dimensions

This little plugin shows your browser window dimensions in the bottom right of your browser. *Clicking on it toggles it's position so you can get it out of the way when you need to.* Eventually, I'll add an option to let it fade out completely when you don't need it.

### Using Local Dimensions

Local Dimensions takes 1 option, which is your local development url. For example: *http://192.168.0.100:8888/*. This value needs to be exactly the same as what's in your browser's location bar. To find out what your local development url is, leave the option blank at first, and the plugin will give you the url that you can copy and paste into the plugin call.

Simply call the plugin to have it display your local url:

```
$('body').localDimensions();
```

Once you know your exact dev url output, you can call the plugin with it. For example here's what mine was today:

```
$('body').localDimensions({devUrl: "http://10.0.0.4:7774/"});
```

#### Why does Local Dimensions need my development url?

During development, a lot of us are constantly pushing code to a staging server. Since we don't usually want dimensions displaying on anything but our local development environments, passing your local dev url will make sure it only shows **locally**. Obviously, this isn't great for working with teams yet, since team members have different urls. I plan to extend it to make sharing code easier with others who may have different local urls. (Or, feel free to fork it and add it yourself!)

**HINT: Click the dimensions to move them to the other side of the window in case you need better visibility of what's beneath them.**