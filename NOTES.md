<button class="py-2 px-4 shadow-md no-underline rounded-full bg-blue text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light focus:outline-none active:shadow-none mr-2">Primary</button>

return errors.Wrap(err, "request failed")

realize start
Scrollbar on hover

div {
height: 100px;
width: 50%;
margin: 0 auto;
overflow: hidden;
}

div:hover {
overflow-y: scroll;
}

SELECT i.id, i.title, array_agg(i.title)
FROM items i
INNER JOIN items_tags it
ON it.item_id = i.id
INNER JOIN tags t
ON t.id = it.tag_id
GROUP BY i.id, i.title,

https://lorenstewart.me/2017/12/03/postgresqls-array_agg-function/
https://www.opsdash.com/blog/postgres-arrays-golang.html
https://stackoverflow.com/questions/44379851/get-postgresql-array-into-struct-with-structscan
https://github.com/jmoiron/sqlx/issues/168
s := strings.Split("a,b,c", ",")

https://www.reddit.com/r/golang/comments/86mpvg/how_do_you_deal_with_rdbms_relationships_in_go/
https://tristangio.fr/2017/03/go-simplify-sql-with-sqlx/
https://jmoiron.github.io/sqlx/

http://www.sqlservertutorial.net/sql-server-basics/sql-server-left-join/

// Dont use interface
https://www.calhoun.io/interfaces-define-requirements/

https://github.com/katzien/go-structure-examples/tree/master/domain-hex
https://github.com/benbjohnson/wtf/tree/http
https://programmingwithmosh.com/net/common-mistakes-with-the-repository-pattern/

// Put order and items in same repo, use tx have method per op

defer tx.Rollback()

public interface BusinessRuleGateway {
Something getSomething(String id);
void startTransaction();
void saveSomething(Something thing);
void endTransaction();
}

//open transaction and set in participants
tx := openTransaction()
ur := NewUserRepository(tx)
ir := NewImageRepository(tx)
//keep user and image datas
err0 := ur.Keep(userData)
err1 := ir.Keep(imageData)
//decision
if err0 != nil || err1 != nil {
tx.Rollback()
return
}
tx.Commit()

// https://medium.com/squad-engineering/blazingly-fast-querying-on-huge-tables-by-avoiding-joins-5be0fca2f523
WITH user_ids AS
(SELECT id
FROM user
WHERE account_id IN
(SELECT generate_series(1,1000)))
SELECT purchase.id
FROM purchase
WHERE user_id IN
(SELECT id
FROM user_ids);
  
/////
SELECT
album.id as album_id,
album.title as album_title,
track.id as track_id,
track.title as track_title
FROM
album
LEFT OUTER JOIN
track
ON
(album.id = track.album_id)
WHERE
album.year = 2018
////

SELECT TOP(5) ProductID, SUM(Quantity) AS TotalQuantity
FROM order_items
GROUP BY ProductID
ORDER BY SUM(Quantity) DESC;

// db options with wrap
https://hackernoon.com/how-to-work-with-databases-in-golang-33b002aa8c47

// mongo paginate
https://github.com/saeedghx68/fast-relay-pagination/blob/6eb6af05ae96df174fd18b220e7904ef69648e9a/src/index.js

////////////////////////////////// REACT

// See for map
// https://youtu.be/5WjXX9-Vu-o?t=1852

// functional toasts
https://codesandbox.io/s/react-toast-notifications-hooks-5xjxc
https://medium.com/@johan.friedrich.pro/use-usetoaster-to-toast-toasts-a-hot-how-to-63e863094aec

<Profile>
  <ProfileName>{username || <SkeletonLine />}</ProfileName>
  <ProfileBio>{userBio || <SkeletonLine />}</ProfileBio>
</Profile>

https://medium.com/octopus-wealth/skeleton-loading-pages-with-react-5a931f12677b
https://www.npmjs.com/package/react-content-loader

gql filtering
https://spectrum.chat/graphql/general/list-filtering-api-examples~e1fc941e-1fdc-4b41-bb9d-89c9f3a8a596
