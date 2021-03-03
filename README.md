##install nginx ingress
`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.44.0/deploy/static/provider/cloud/deploy.yaml`

##secrets created
`kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf`
