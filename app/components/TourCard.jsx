import { Badge } from "@/components/ui/badge"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Guide1 from '../../public/57.jpg'
export default function Component({src , Guide , Name ,Location , Year  , Language}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Badge variant="outline">{Guide}</Badge>
            <h2 className="text-lg font-bold tracking-tight">{Name}</h2>
          </div>
          <div className="flex items-center space-x-2">
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4 fill-current" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex items-center space-x-4">
      <img
            alt="tour guide"
            className="rounded-full"
            src={src} 
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            height="40"
            width="40"
        />

        <div className="grid gap-1">
          <div className="flex items-center space-x-2">
            <LocateIcon className="w-4 h-4 opacity-60" />
            <span className="text-sm font-medium">{Location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarDaysIcon className="w-4 h-4 opacity-60" />
            <span className="text-sm font-medium">{`Guide since ${Year}`}</span>
          </div>
          <div className="flex items-center space-x-2">
            <TextIcon className="w-4 h-4 opacity-60" />
            <span className="text-sm font-medium">{Language}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full">
          <Button className="flex-1 mr-2" variant="outline">
            Contact
          </Button>
          <Button className="flex-1" variant="outline">
            More info
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function TextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}
