'use strict';

page('/', homeView.init);
page('/about', aboutView.init);
page('/contact', contactView.init);
page('/contact/:number', contactView.init);

page();