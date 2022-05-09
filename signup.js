import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

console.log("Running ......");
console.log(process.env.SUPABASE_URL);

const supabaseURL = process.env.SUPABASE_URL; // 해당 supabase url 입력
const supabaseKey = process.env.SUPABASE_ANON_KEY; // supabase에서 제공한 토큰 입력

const supabase = createClient(supabaseURL, supabaseKey);

let { user, error } = await supabase.auth.signUp({
  email: "alex.choi@pingpong.house", // 이메일 입력
  password: "1234567890", // 비밀번호 입력
});

console.log(user, error);
