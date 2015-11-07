#!/usr/bin/env bash 

# initialize the engr directory for complete read access 

for f in `find  ~/public_html/*`; do chmod a+r $f; done
chmod a+x ~/public_html/docs/
chmod a+x ~/public_html/publications/
chmod a+x ~/public_html/src/
chmod a+x ~/public_html/src/img/
chmod a+x ~/public_html/src/js/
chmod a+x ~/public_html/src/scss/
chmod a+x ~/public_html/src/scss/layout/
chmod a+x ~/public_html/src/svg/
chmod a+x ~/public_html/ua_components/
chmod a+x ~/public_html/ua_components/ua-brand-icons/
chmod a+x ~/public_html/ua_components/ua-brand-icons/demo-files/
chmod a+x ~/public_html/ua_components/ua-brand-icons/fonts/
chmod a+x ~/public_html/ua_components/ua-brand-icons/ie7/
chmod a+x ~/public_html/ua_components/ua-brand-icons/ua-brand-icons-image-files/
chmod a+x ~/public_html/ua_components/ua-brand-icons/ua-brand-icons-image-files/PNG/
chmod a+x ~/public_html/ua_components/ua-brand-icons/ua-brand-icons-image-files/SVG/

