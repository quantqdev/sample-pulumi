import * as pulumi from "@pulumi/pulumi";
import * as docker from "@pulumi/docker";

// Find the latest nginx image.
const nginxRemoteImage = new docker.RemoteImage("nginxRemoteImage", {name: "nginx"});
// Start a container
const nginxContainer = new docker.Container("nginxContainer", {image: nginxRemoteImage.imageId});