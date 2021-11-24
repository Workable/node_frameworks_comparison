# KOA
## List

```
curl http://localhost:3000/persons
```

## Add
```
curl -X POST -H "Content-Type: application/json" \
    -d '{"name": "linuxize", "email": "linuxize@example.com", "id":2}' \
    http://localhost:3000/persons

```
## Update
```
curl -X PATCH -H "Content-Type: application/json" \
    -d '{"name": "nikos"}' \ 
    http://localhost:3000/persons/2
```

## Get
```
curl http://localhost:3000/persons/2
```


# EXPRESS
## List

```
curl http://localhost:3002/persons
```

## Add
```
curl -X POST -H "Content-Type: application/json" \
    -d '{"name": "linuxize", "email": "linuxize@example.com", "id":2}' \
    http://localhost:3002/persons

```
## Update
```
curl -X PATCH -H "Content-Type: application/json" \
    -d '{"name": "nikos"}' \ 
    http://localhost:3002/persons/2
```

## Get
```
curl http://localhost:3002/persons/2
```

# FASTIFY
## List

```
curl http://localhost:3001/persons
```

## Add
```
curl -X POST -H "Content-Type: application/json" \
    -d '{"name": "linuxize", "email": "linuxize@example.com", "id":2}' \
    http://localhost:3001/persons

```
## Update
```
curl -X PATCH -H "Content-Type: application/json" \
    -d '{"name": "nikos"}' \ 
    http://localhost:3001/persons/2
```

## Get
```
curl http://localhost:3001/persons/2
```
