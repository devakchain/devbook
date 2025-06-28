import { Route } from "react-router-dom";

// Stage 1 – Foundations
import JavaScriptPage from "../content/javascript/JavaScriptPage";
import Stage1Page from "../content/javascript/stage-1/Stage1Page";
import Variables from "../content/javascript/stage-1/VariablesPage";
import DataTypes from "../content/javascript/stage-1/DataTypes";
import TypeConversion from "../content/javascript/stage-1/TypeConversion";
import Conditionals from "../content/javascript/stage-1/Conditionals";
import LoopsPage from "../content/javascript/stage-1/LoopsPage";
import OperatorsPage from "../content/javascript/stage-1/OperatorsPage";
import DestructuringPage from "../content/javascript/stage-1/DestructuringPage";
import ScopePage from "../content/javascript/stage-1/ScopePage";
import AssignmentPatternsPage from "../content/javascript/stage-1/AssignmentPatternsPage";

// Stage 2 – Functions
import FunctionsPage from "../content/javascript/stage-2/FunctionsPage";
import FunctionTypesPage from "../content/javascript/stage-2/FunctionTypesPage";
import DefaultParametersPage from "../content/javascript/stage-2/DefaultParametersPage";
import ArgumentsObjectPage from "../content/javascript/stage-2/ArgumentsObjectPage";
import ThisKeywordPage from "../content/javascript/stage-2/ThisKeywordPage";
import FunctionHoistingPage from "../content/javascript/stage-2/FunctionHoistingPage";
import CallbackFunctionsPage from "../content/javascript/stage-2/CallbackFunctionsPage";
import IIFEPage from "../content/javascript/stage-2/IIFEPage";
import ClosuresPage from "../content/javascript/stage-2/ClosuresPage";
import FunctionMethodsPage from "../content/javascript/stage-2/FunctionMethodsPage";
import RestParametersPage from "../content/javascript/stage-2/RestParametersPage";
import LexicalScopePage from "../content/javascript/stage-2/LexicalScope";

// Stage 3 – Data Structures
import DataStructuresPage from "../content/javascript/stage-3/DataStructuresPage";
// (את הדפים הבאים תייבא כשתיצור אותם בעתיד)

export const javascriptRoutes = (
  <>
    {/* Stage 1 – Foundations */}
    <Route path="/javascript" element={<JavaScriptPage />} />
    <Route path="/javascript/stage-1" element={<Stage1Page />} />
    <Route path="/javascript/stage-1/variables" element={<Variables />} />
    <Route path="/javascript/stage-1/data-types" element={<DataTypes />} />
    <Route
      path="/javascript/stage-1/type-conversion"
      element={<TypeConversion />}
    />
    <Route path="/javascript/stage-1/conditionals" element={<Conditionals />} />
    <Route path="/javascript/stage-1/loops" element={<LoopsPage />} />
    <Route path="/javascript/stage-1/operators" element={<OperatorsPage />} />
    <Route
      path="/javascript/stage-1/destructuring"
      element={<DestructuringPage />}
    />
    <Route path="/javascript/stage-1/scope" element={<ScopePage />} />
    <Route
      path="/javascript/stage-1/assignment-patterns"
      element={<AssignmentPatternsPage />}
    />

    {/* Stage 2 – Functions */}
    <Route path="/javascript/stage-2" element={<FunctionsPage />} />
    <Route
      path="/javascript/stage-2/function-types"
      element={<FunctionTypesPage />}
    />
    <Route
      path="/javascript/stage-2/default-parameters"
      element={<DefaultParametersPage />}
    />
    <Route
      path="/javascript/stage-2/arguments-object"
      element={<ArgumentsObjectPage />}
    />
    <Route
      path="/javascript/stage-2/this-keyword"
      element={<ThisKeywordPage />}
    />
    <Route
      path="/javascript/stage-2/function-hoisting"
      element={<FunctionHoistingPage />}
    />
    <Route
      path="/javascript/stage-2/callback-functions"
      element={<CallbackFunctionsPage />}
    />
    <Route path="/javascript/stage-2/iife" element={<IIFEPage />} />
    <Route path="/javascript/stage-2/closures" element={<ClosuresPage />} />
    <Route
      path="/javascript/stage-2/function-methods"
      element={<FunctionMethodsPage />}
    />
    <Route
      path="/javascript/stage-2/rest-parameters"
      element={<RestParametersPage />}
    />
    <Route
      path="/javascript/stage-2/lexical-scope"
      element={<LexicalScopePage />}
    />

    {/* Stage 3 – Data Structures */}
    <Route path="/javascript/stage-3" element={<DataStructuresPage />} />
  </>
);
