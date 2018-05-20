# Tjs

This is a small utility for allowing the use of jQuery-like syntax.

## document.ready

```javascript
t(() => {console.log('Ready!')})
```

## document.querySelector

```javascript
t('#someId')
```

## addEventListener

```javascript
t('#someId').on('click', () => { alert('someId was clicked!' })
```

## fetch extensions

```javascript
fetch('url').then(response => response.json())
```

becomes

```javascript
t.fetchJson('url')
```
