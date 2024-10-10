import Tweet from '@/components/tweet/tweet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react'

import OpenAI from 'openai'

export default async function TwitterFeed() {
	// const openai = new OpenAI({
	// 	apiKey: process.env.OPENAI_KEY,
	// })

	// const completion = await openai.chat.completions.create({
	// 	model: 'gpt-4o-mini',
	// 	messages: [
	// 		{ role: 'system', content: 'You are a helpful assistant.' },
	// 		{
	// 			role: 'user',
	// 			content: 'Write a haiku about recursion in programming.',
	// 		},
	// 	],
	// })

	// console.log(completion.choices[0].message)
	const tweets = [
		{
			id: 1,
			user: {
				name: 'John Doe',
				handle: 'johndoe',
				avatar: '/placeholder-user.jpg',
			},
			content: 'Just had an amazing day at the beach! 🏖️ #summervibes',
			likes: 15,
			retweets: 3,
			replies: 2,
		},
		{
			id: 2,
			user: {
				name: 'Jane Smith',
				handle: 'janesmith',
				avatar: '/placeholder-user.jpg',
			},
			content:
				'Excited to announce my new project! Stay tuned for more details. 🚀 #newbeginnings',
			likes: 32,
			retweets: 8,
			replies: 5,
		},
		{
			id: 3,
			user: {
				name: 'Tech Enthusiast',
				handle: 'techenthusiast',
				avatar: '/placeholder-user.jpg',
			},
			content:
				'The future of AI is here! Check out this amazing new breakthrough: https://example.com/ai-news #AI #TechNews',
			likes: 45,
			retweets: 12,
			replies: 7,
		},
	]

	return (
		<div className="max-w-2xl mx-auto">
			<header className="sticky top-0 z-10 bg-background border-b">
				<h1 className="text-xl font-bold p-4">Home</h1>
			</header>
			<main>
				<Card className="rounded-none border-x-0 border-t-0">
					<CardHeader className="flex flex-row space-x-4 p-4">
						<Avatar>
							<AvatarImage src="/placeholder-user.jpg" alt="Your avatar" />
							<AvatarFallback>You</AvatarFallback>
						</Avatar>
						<Textarea className="flex-grow" placeholder="What's happening?" />
					</CardHeader>
					<CardFooter className="justify-between p-4">
						<Button>Tweet</Button>
					</CardFooter>
				</Card>
				{tweets.map((tweet) => (
					<Tweet key={tweet.id} tweet={tweet} />
				))}
			</main>
		</div>
	)
}
