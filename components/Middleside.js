import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingHashtags } from "../reducers/hashtags";
import Post from "./Post";
import styles from "../styles/Middleside.module.css";

function Middleside(props) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const trends = useSelector((state) => state.hashtags.value);
  const user = useSelector((state) => state.user.value);

  const fetchAllPosts = () => {
    setLoading(true);
    fetch("http://localhost:3000/posts/allPosts")
      .then((res) => res.json())
      .then((data) => {
        console.log("Données reçues:", data);
        if (!data.allPosts || data.allPosts.length === 0) {
          console.warn("Aucun post trouvé !");
        } else {
          setPosts(data.allPosts);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur API:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const getHashtagswords = (text) => {
    const hashtags = text.match(/#\w+/g);
    dispatch(addTrendingHashtags(hashtags));

    fetch("http://localhost:3000/posts/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        post: message,
        firstname: user.firstname,
        username: user.username,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Post ajouté:", data.post);
        if (data.result) {
          setMessage("");
          fetchAllPosts();
        }
      })
      .catch((error) => console.error("Erreur ajout post:", error));
  };

  //
  const handleDelete = async (postId) => {
    try {
      console.log("Suppression du post ID:", postId);
      const res = await fetch(
        `http://localhost:3000/posts/removePost/${postId}`,
        {
          method: "POST",
        }
      );

      const data = await res.json();
      if (data.result) {
        console.log("Post supprimé !");
        fetchAllPosts();
      } else {
        console.error("Erreur suppression :", data.message);
      }
    } catch (error) {
      console.error("Erreur réseau ou serveur :", error);
    }
  };

  return (
    <div className={styles.page} style={props.style}>
      <div className={styles.top}>
        <h1 className={styles.h1}>Home</h1>
        <textarea
          className={styles.input}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="What's up"
          value={message}
        />
        <div className={styles.underInput}>
          {message.length}/200
          <button
            onClick={() => getHashtagswords(message)}
            className={styles.button}
          >
            <strong>Tweet</strong>
          </button>
        </div>
      </div>

      {loading ? (
        <p>Chargement des posts...</p>
      ) : (
        posts.map((post) => (
          <Post
            key={post._id}
            id={post._id}
            username={post.username || "Inconnu"}
            firstname={post.firstname || "Anonymous"}
            content={post.post || "Pas de contenu"}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}

export default Middleside;
