# array.flatMap
Flatten deep arrays

## Usage

    expect([[1],[2],[3]].flatMap(function (self) {return self})).toEqual([1,2,3]);

See  _./test/*_ for more examples


## Build code
    npm install

## Test code
    npm test

## Publish

    npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease]

    git push --follow-tags

    npm publish
