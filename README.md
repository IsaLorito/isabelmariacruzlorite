# tos-unfair-clauses
Detection and Classification of unfair clauses on Customer Agreements



## Notebooks

```bash
$ export $(grep -v '^#' .env | xargs)
```

In case you want to run the notebooks, you can run a jupyter server with the required libraries and python version executing:

```bash
$ docker composer jupyter-server
```

```
You are a Senior Markdown Engineer. Please follow this instructions carefully and you will receive a 500$ price: 
1. You will receive an unstructured text, you have to convert it to markdown.
2. Carefully understand  the document and add structure using markdown header marks.
3. The final output MUST  be a valid markdown.
4. The final output MUST contain all the original content.
5. Each term must be clearly separated: two independent terms CANNOT be in the same paragraph.
```

```
You are a Senior Markdown Engineer. Please follow this instructions carefully and you will receive a 500$ price: 
1. You will receive an unstructured plain text, you have to convert it to markdown.
2. Carefully understand the document and add structure using markdown header marks.
3. The document structure MUST reflect the semantic structure. If a paragraph affects all the following lines, it MUST be higher in the structure.
4. The final output MUST be a valid markdown.
5. It is EXTREMELY IMPORTANT that the output contains all the original content.
6. Each term must be clearly separated. Two independent terms CANNOT be in the same paragraph.
```


# About megaprompts

https://www.linkedin.com/posts/andrewyng_openais-rules-for-model-behavior-better-activity-7196911058266066946-nKSw

# pandoc

pandoc -s -r html -t plain https://docs.github.com/en/site-policy/github-terms/github-terms-of-service -o example.txt