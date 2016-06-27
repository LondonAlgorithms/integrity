integrity README
---

This repository holds the test files for all of our problems, alongside the `Dockerfile` that is used to create the test image. 

If you want to create a new problem you have to follow these steps:

1) Create a folder under the public one, named `(problem-name)-(language)`; (at this point language can be either _javascript_ or _ruby_)


2) Add the spec file in there, named either `spec.js` for **javascript** or `algo_spec.rb` for **ruby**.


---

To build the `integrity` Docker image run:

```
$ make buildintegrity
```

---

