"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Header from "@/components/common/Header"
import Breadcrumb from "@/components/common/Breadcrumb"
import QuestionBody from "@/components/questions/QuestionBody"
import AnswerList from "@/components/answers/AnswerList"
import AnswerEditor from "@/components/answers/AnswerEditor"
import VoteButton from "@/components/common/VoteButton"
import LoginModal from "@/components/auth/LoginModal"
import { useQuestionStore } from "@/stores/questionStore"
import { useAuthStore } from "@/stores/authStore"
import { Button } from "@/components/ui/button"
import { Share2, Bookmark } from "lucide-react"

export default function QuestionDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const { user } = useAuthStore()
  const { currentQuestion, loadQuestionById, addAnswer, voteOnQuestion } = useQuestionStore()
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showAnswerEditor, setShowAnswerEditor] = useState(false)

  const questionId = params.id as string

  useEffect(() => {
    if (questionId) {
      loadQuestionById(questionId)
    }
  }, [questionId, loadQuestionById])

  useEffect(() => {
    if (currentQuestion === null && !useQuestionStore.getState().isLoading) {
      router.push("/")
    }
  }, [currentQuestion, router])


  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Question Not Found
            </h1>
            <p className="text-gray-600 mb-6">
              The question you're looking for doesn't exist.
            </p>
            <Button onClick={() => router.push("/")}>Back to Home</Button>
          </div>
        </main>
      </div>
    );
  }

  const handleVote = (type: "up" | "down") => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }
    voteOnQuestion(questionId, type === "up" ? "upvote" : "downvote")
  }

  const handleAnswerSubmit = (content: string) => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }

    addAnswer(questionId, content)
    setShowAnswerEditor(false)
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Questions", href: "/" },
    { label: currentQuestion.title.substring(0, 50) + "...", href: `/question/${questionId}` },
  ]

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <main className="container mx-auto px-4 py-6 max-w-6xl">
          <Breadcrumb items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm border">
                {/* Question Header */}
                <div className="p-6 border-b">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div className="flex-1">
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">{currentQuestion.title}</h1>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span>Asked {new Date(currentQuestion.createdAt).toLocaleDateString()}</span>
                        <span>{currentQuestion.answers.length} answers</span>

                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Bookmark className="w-4 h-4 mr-1" />
                        Save
                      </Button>

                    </div>
                  </div>
                </div>

                {/* Question Body with Voting */}
                <div className="flex">
                  <div className="p-6 pr-0">
                    <VoteButton 
                      votes={(currentQuestion.votes || []).reduce((sum, vote) => sum + (vote.type === "upvote" ? 1 : -1), 0)}
                      onVote={handleVote} 
                      orientation="vertical"
                      userVote={currentQuestion.votes?.find(vote => vote.user.id === user?.id)?.type === "upvote" ? "up" : 
                               currentQuestion.votes?.find(vote => vote.user.id === user?.id)?.type === "downvote" ? "down" : null}

                    />
                  </div>
                  <div className="flex-1 p-6 pl-4">
                    <QuestionBody question={currentQuestion} />
                  </div>
                </div>

                {/* Answers Section */}
                <div className="border-t">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-semibold text-gray-900">
                        {currentQuestion.answers.length} Answer{currentQuestion.answers.length !== 1 ? "s" : ""}

                      </h2>
                    </div>

                    <AnswerList
                      answers={currentQuestion.answers}
                      questionId={questionId}
                      questionAuthorId={currentQuestion.author.id}
                    />
                  </div>
                </div>

                {/* Answer Editor */}
                <div className="border-t p-6">
                  {user ? (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Your Answer
                      </h3>
                      <AnswerEditor onSubmit={handleAnswerSubmit} />
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-600 mb-4">
                        You need to be logged in to post an answer.
                      </p>
                      <Button onClick={() => setShowLoginModal(true)}>
                        Login to Answer
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>

      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </>
  );
}
