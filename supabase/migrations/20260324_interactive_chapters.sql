-- Chapter progress tracking
CREATE TABLE IF NOT EXISTS chapter_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_slug TEXT NOT NULL,
  chapter_number INTEGER NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_slug, chapter_number)
);

CREATE INDEX IF NOT EXISTS idx_chapter_progress_user ON chapter_progress(user_id, course_slug);
ALTER TABLE chapter_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own chapter progress" ON chapter_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own chapter progress" ON chapter_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own chapter progress" ON chapter_progress FOR UPDATE USING (auth.uid() = user_id);

-- Quiz results
CREATE TABLE IF NOT EXISTS quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_slug TEXT NOT NULL,
  chapter_number INTEGER NOT NULL,
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  passed BOOLEAN DEFAULT FALSE,
  attempted_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, course_slug, chapter_number)
);

CREATE INDEX IF NOT EXISTS idx_quiz_results_user ON quiz_results(user_id, course_slug);
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own quiz results" ON quiz_results FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own quiz results" ON quiz_results FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own quiz results" ON quiz_results FOR UPDATE USING (auth.uid() = user_id);
