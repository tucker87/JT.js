# Tjs

This is a small utility for allowing the use of jQuery-like syntax.

## document.ready

`t(() => {console.log('Ready!')})`

## document.querySelector

`t('#someId')`

## addEventListener

`t('#someId').on('click', () => { alert('someId was clicked!' })`

## fetch extensions

`fetch('url').then(response => response.json())`

becomes

`t.fetchJson('url')`
