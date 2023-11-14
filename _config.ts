import lume from "lume/mod.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume();

// TODO: Delete when lume 2.0 published
import vento from "lume/plugins/vento.ts";
site.use(vento());

site.use(minifyHTML());
site.use(sitemap());

export default site;
