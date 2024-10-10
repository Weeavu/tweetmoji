import { MessageCircle, Repeat2, Heart, Share } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Card, CardFooter, CardHeader } from '../ui/card'

export default function Tweet({ tweet }: any) {
	return (
		<Card className="rounded-none border-x-0 border-t-0">
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
	)
}
