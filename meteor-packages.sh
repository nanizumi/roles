#!/bin/sh
# it seems that meteorite isn't very effective installing packages locally
echo "installing meteor packages:"
#echo "bootstrap..."
#mrt add bootstrap
echo "accounts base ..."
meteor add accounts-base
echo "accounts password ..."
mrt add accounts-password

echo "add jquery"
meteor add jquery
echo "add less"
meteor add less

echo "installing meteorite packages:"
echo "iron router..."
mrt add iron-router

echo "add bootstrap & fontawesome"
mrt add bootstrap3-less
#mrt add font-awesome-4-less
## cp /packages/less-bottstrap-3/lib/fonts /public/fonts

#echo "pull base styles"
#git clone https://github.com/DerMambo/stylesheets.git ./client/stylesheets


echo "spin..."
mrt add spin

echo "roles..."
mrt add roles
echo "accounts-ui-bootstrap-3"
mrt add accounts-ui-bootstrap-3


echo "autoform and collection2"
mrt add autoform
mrt add collection2


#echo "add meteorErrors custom package..."
#meteor add errors

#echo "add iron-router-progress"
#mrt add iron-router-progress

#echo "cleanup"
#echo "removing insecure "
#meteor remove insecure
#
#echo "removing autopublish"
#meteor remove autopublish
