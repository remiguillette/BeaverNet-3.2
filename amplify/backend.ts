import { defineBackend } from "@aws-amplify/backend";
import { HttpMethod } from "aws-cdk-lib/aws-apigatewayv2";
import { HttpApi, CorsHttpMethod } from "aws-cdk-lib/aws-apigatewayv2";
import { HttpLambdaIntegration } from "aws-cdk-lib/aws-apigatewayv2-integrations";
import { contactDiscord } from "./functions/contact-discord/resource";

const backend = defineBackend({
  contactDiscord,
});

const apiStack = backend.createStack("contact-api-stack");

const contactApi = new HttpApi(apiStack, "ContactHttpApi", {
  apiName: "contact-api",
  corsPreflight: {
    allowMethods: [CorsHttpMethod.POST, CorsHttpMethod.OPTIONS],
    allowOrigins: ["https://main.dzhgbx6dae47h.amplifyapp.com"],
    allowHeaders: ["content-type"],
  },
});

const contactIntegration = new HttpLambdaIntegration(
  "ContactDiscordIntegration",
  backend.contactDiscord.resources.lambda,
);

contactApi.addRoutes({
  path: "/contact",
  methods: [HttpMethod.POST, HttpMethod.OPTIONS],
  integration: contactIntegration,
});
