"use client";
import { testAction, uploadImage } from "@/actions/test";
import React, {
  ActionDispatch,
  Dispatch,
  FC,
  FormEvent,
  FormEventHandler,
  useEffect,
  useReducer,
  useState,
} from "react";

type State = {
  name: string;
  age: string;
  education: string;
  bio: string;
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_AGE"; payload: string }
  | { type: "SET_EDUCATION"; payload: string }
  | { type: "SET_BIO"; payload: string };

const TestPage = () => {
  const initialState: State = { name: "", age: "", education: "", bio: "" };

  const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "SET_AGE":
        return { ...state, age: action.payload };
      case "SET_EDUCATION":
        return { ...state, education: action.payload };
      case "SET_BIO":
        return { ...state, bio: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const [activePart, setActivePart] = useState<number>(1);

  useEffect(() => {
    console.log({
      name: state.name,
      age: state.age,
      education: state.education,
      bio: state.bio,
    });
  }, [state.name, state.age, state.education, state.bio]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", state.name);
    formData.append("age", state.age);
    formData.append("education", state.education);
    formData.append("bio", state.bio);
    testAction(formData);
  };

  return (
    <div>
      <div className="flex gap-4">
        <button className="border p-2" onClick={() => setActivePart(1)}>
          part 1
        </button>
        <button className="border p-2" onClick={() => setActivePart(2)}>
          part 2
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {activePart === 1 ? (
          <FirstPart state={state} dispatch={dispatch} />
        ) : (
          <SecondPart state={state} dispatch={dispatch} />
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestPage;

const SecondPart: FC<FormPartProps> = ({ state, dispatch }) => {
  return (
    <div>
      <input
        name="education"
        value={state.education}
        onChange={(e) =>
          dispatch({ type: "SET_EDUCATION", payload: e.target.value })
        }
        placeholder="Enter education"
      />
      <input
        name="bio"
        type="text"
        value={state.bio}
        onChange={(e) =>
          dispatch({
            type: "SET_BIO",
            payload: e.currentTarget.value,
          })
        }
        placeholder="Enter bio"
      />
    </div>
  );
};

interface FormPartProps {
  state: State;
  dispatch: Dispatch<Action>;
}

const FirstPart: FC<FormPartProps> = ({ state, dispatch }) => {
  return (
    <div>
      <input
        name="name"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.currentTarget.value })
        }
        placeholder="Enter name"
      />
      <input
        name="age"
        type="number"
        value={state.age}
        onChange={(e) =>
          dispatch({
            type: "SET_AGE",
            payload: e.currentTarget.value,
          })
        }
        placeholder="Enter age"
      />
    </div>
  );
};
