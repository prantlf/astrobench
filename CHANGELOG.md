## [1.1.0](https://github.com/prantlf/astrobench/compare/v1.0.5...v1.1.0) (2020-02-01)

### Features

* Display suite options ([f7ae893](https://github.com/prantlf/astrobench/commit/f7ae89308776b197722ce360356cc7eb029f8b46))
* Optionally disable the comparison of benchmarks in a suite ([bac9ec8](https://github.com/prantlf/astrobench/commit/bac9ec84648cd74ba5de8beb452304431c15965f))
* Introduce suiteOptions and benchOptions, deprecate options ([79e43b2](https://github.com/prantlf/astrobench/commit/79e43b2386b33b49b03ea27514c098d5eb0cc76a))

### Bug Fixes

* Show both local and global options for suites and benachmarks ([f84548e](https://github.com/prantlf/astrobench/commit/f84548ea2119ed9964c491fafffb7bf389bf8503))

## [1.0.5](https://github.com/prantlf/astrobench/compare/v1.0.4...v1.0.5) (2020-02-01)

### Bug Fixes

* Remove previous optimizations that broke lodach browserifying ([332d78a](https://github.com/prantlf/astrobench/commit/332d78a61dc971ba0729c669fd40e5ec2283d649))

## [1.0.4](https://github.com/prantlf/astrobench/compare/v1.0.3...v1.0.4) (2020-02-01)

### Bug Fixes

* Fix sourcemaps for minified and not minified stylesheets ([61cd914](https://github.com/prantlf/astrobench/commit/61cd914b9c4747fc2fa5f6e2f01efab2227c4099))
* Fix sourcemaps for the not minified script ([1d5d4c8](https://github.com/prantlf/astrobench/commit/1d5d4c8d94b228aad220e52fd845a2609eeceeb6))
* Hilight original caller's options; not the internally extend ones ([9806b5e](https://github.com/prantlf/astrobench/commit/9806b5e290c17b318e5dc265a1c2d1e0f090acee))
* Reduce the package size by flattening require modules and dropping unused code ([65fbd49](https://github.com/prantlf/astrobench/commit/65fbd496a1e4eb352a82c053e5f0360c43ce0acd))

## [1.0.3](https://github.com/prantlf/astrobench/compare/v1.0.2...v1.0.3) (2020-02-01)

### Bug Fixes

* Move build-time dependencies from the package to devDependencies ([d4dd549](https://github.com/prantlf/astrobench/commit/d4dd54932e9a945dfe4d4b2398ea888ed1faa9ca))

## [1.0.2](https://github.com/prantlf/astrobench/compare/v1.0.1...v1.0.2) (2020-01-31)

### Bug Fixes

* Add missing global function beforeSuite and addSuite ([add0d82](https://github.com/prantlf/astrobench/commit/add0d82b56ceea8dd9cd2091bde930b93de6e058))

## [1.0.1](https://github.com/prantlf/astrobench/compare/v1.0.0...v1.0.1) (2020-01-31)

### Features

* Expose beforeSuite and afterSuite ([208b7ee](https://github.com/prantlf/astrobench/commit/208b7eebf19d59f9dcc7f5a3f71decd504f24fe6))

## [1.0.1](https://github.com/prantlf/astrobench/compare/6d089660fba64bd20a3a38428f19ef45d6af2800...v1.0.0) (2020-01-31)

### Features

* Include benchIndex in the global state object ([5f21f0b](https://github.com/prantlf/astrobench/commit/5f21f0b0cbbf63dfaa40015243470117c134bd67))
* Remember computed ops, mean, rme and delta to the fastest benchmark ([6953dd5](https://github.com/prantlf/astrobench/commit/6953dd576b315b04997f057cdcaf93e96379a9db))
* Introduce beforeSuite and afterSuite ([a578d1f](https://github.com/prantlf/astrobench/commit/a578d1fe11ed1560b1cc111d867b65b17c987759))
* Introduce beforeBench and afterBench, deprecate setup and after ([0ed2096](https://github.com/prantlf/astrobench/commit/0ed20967905042b3dc4326468126be724be11cf4))
* Remove bower support, use the new npm installation syntax, mention unpkg ([e623d14](https://github.com/prantlf/astrobench/commit/e623d14b73a78970e67b4f01d5d8d20ad1d7e09a))
* Add stylesheets to the distribution directory ([2afa944](https://github.com/prantlf/astrobench/commit/2afa9448ea07f47de29426d6117b22ce1a75d26c))
* Add minified stylesheet to the distribution directory ([26094ee](https://github.com/prantlf/astrobench/commit/26094ee14c46cf5275b3c2c5b92d1fa0186f3a2e))

### Bug Fixes

* Make state and abort() accessible on window.astrobench ([4bdacfb](https://github.com/prantlf/astrobench/commit/4bdacfb4b5f441987320976065c72611f3258762))
* Include only the dist directory in the published package ([33648bd](https://github.com/prantlf/astrobench/commit/33648bd929270f3e0d5f5e777034e89847d63bc5))
* Do not exclude source maps from the distribution directory ([9eeba4a](https://github.com/prantlf/astrobench/commit/9eeba4a186260786ca111f53e19ba2fcf21117a5))

### BREAKING CHANGE

The support for `bower` has been removed. This tool and its ecosystem have been deprecated in favour of `npm` and `unpkg`.

This is the first version released after forking the [original project](https://github.com/kupriyanenko/astrobench).
