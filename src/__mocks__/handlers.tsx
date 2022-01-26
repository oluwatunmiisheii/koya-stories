import { rest } from "msw";
import { storiesmock } from "./mockResponse/Stories.mocks";
import { IStory } from '../models/Stories.models';


export const handlers = [
	rest.get<IStory>('https://techcrunch.com/wp-json/wp/v2/posts', (req, res, ctx) => {
			return res(ctx.status(200), ctx.json(storiesmock));
		},
	),
	rest.get(`https://techcrunch.com/wp-json/wp/v2/posts/${storiesmock[0].id}`, (req, res, ctx) => {
			return res(ctx.status(200), ctx.json({ ...storiesmock[0] }));
		},
	),
	rest.get("*", (req, res, ctx) => {
		console.error(`Please add request handler for ${req.url.toString()}`);
		return res(
			ctx.status(500),
			ctx.json({ error: "You must add request handler." }),
		);
	}),

	rest.post("*", (req, res, ctx) => {
		console.error(`Please add POST request handler for ${req.url.toString()}`);
		return res(
			ctx.status(500),
			ctx.json({ error: "You must add request handler." }),
		);
	}),

	rest.put("*", (req, res, ctx) => {
		console.error(`Please add PUT request handler for ${req.url.toString()}`);
		return res(
			ctx.status(500),
			ctx.json({ error: "You must add request handler." }),
		);
	}),
];
