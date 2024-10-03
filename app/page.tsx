import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react'

export default function TwitterFeed() {
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
						<div></div>
						<Button>Tweet</Button>
					</CardFooter>
				</Card>
				{tweets.map((tweet) => (
					<Card key={tweet.id} className="rounded-none border-x-0 border-t-0">
						<CardHeader className="flex flex-row space-x-4 p-4">
							<Avatar>
								<AvatarImage src={tweet.user.avatar} alt={tweet.user.name} />
								<AvatarFallback>{tweet.user.name[0]}</AvatarFallback>
							</Avatar>
							<div className="flex-grow">
								<div className="flex items-center space-x-2">
									<span className="font-bold">{tweet.user.name}</span>
									<span className="text-gray-500">@{tweet.user.handle}</span>
								</div>
								<p className="mt-2">{tweet.content}</p>
							</div>
						</CardHeader>
						<CardFooter className="justify-between p-4">
							<Button variant="ghost" size="icon">
								<MessageCircle className="h-5 w-5" />
								<span className="ml-2">{tweet.replies}</span>
							</Button>
							<Button variant="ghost" size="icon">
								<Repeat2 className="h-5 w-5" />
								<span className="ml-2">{tweet.retweets}</span>
							</Button>
							<Button variant="ghost" size="icon">
								<Heart className="h-5 w-5" />
								<span className="ml-2">{tweet.likes}</span>
							</Button>
							<Button variant="ghost" size="icon">
								<Share className="h-5 w-5" />
							</Button>
						</CardFooter>
					</Card>
				))}
			</main>
		</div>
	)
}
