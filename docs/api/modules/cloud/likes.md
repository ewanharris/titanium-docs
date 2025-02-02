---
editUrl: https://github.com/appcelerator-modules/ti.cloud/edit/master/apidoc/Likes/Likes.yml
---
# Modules.Cloud.Likes

<TypeHeader/>

## Examples

### Create a Like

This example creates a new like and checks the response.

``` js
Cloud.Likes.create({
    user_id: someUserId
}, function (e) {
    if (e.success) {
        alert('Created!');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

### Remove a Like

This example deletes a like and checks the response.

``` js
Cloud.Likes.remove({
    user_id: someUserId
}, function (e) {
    if (e.success) {
        alert('Removed');
    } else {
        alert('Error:\n' +
            ((e.error && e.message) || JSON.stringify(e)));
    }
});
```

<ApiDocs/>
