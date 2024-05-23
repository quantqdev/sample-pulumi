import * as pulumi from "@pulumi/pulumi";
import * as docker from "@pulumi/docker";

const config = new pulumi.Config();
const nginxContainerName = config.require("nginxContainerName");
// pulumi replaces secret in input of console.log
// this will print `[secret]Name: [secret]`
// this can be a trick to guess the secret
console.log(`nginxContainerName: ${nginxContainerName}`); 

// Find the latest nginx image.
const nginxRemoteImage = new docker.RemoteImage("nginxRemoteImage", {name: "nginx"});
// Start a container
const nginxContainer = new docker.Container(nginxContainerName, {image: nginxRemoteImage.imageId});