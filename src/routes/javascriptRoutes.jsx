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
import ObjectsPage from "../content/javascript/stage-3/ObjectsPage";
import ObjectUtilitiesPage from "../content/javascript/stage-3/ObjectUtilitiesPage";
import ShallowDeepCopyPage from "../content/javascript/stage-3/ShallowDeepCopyPage";
import ArraysPage from "../content/javascript/stage-3/ArraysPage";
import IterationMethodsPage from "../content/javascript/stage-3/IterationMethodsPage";
import MutationMethodsPage from "../content/javascript/stage-3/MutationMethodsPage";
import NonMutatingPage from "../content/javascript/stage-3/NonMutatingMethodsPage";
import SetsPage from "../content/javascript/stage-3/SetsPage";
import MapsPage from "../content/javascript/stage-3/MapsPage";
import ObjectIterationPage from "../content/javascript/stage-3/ObjectIterationPage";
import ArrayIterationPage from "../content/javascript/stage-3/ArrayIterationPage";

// Stage 4 – JavaScript Internals
import InternalsPage from "../content/javascript/stage-4/JavaScriptInternalsPage";
import ExecutionContextPage from "../content/javascript/stage-4/ExecutionContextPage";
import LexicalEnvironmentPage from "../content/javascript/stage-4/LexicalEnvironmentPage";
import ScopeChainPage from "../content/javascript/stage-4/ScopeChainPage";
import HoistingPage from "../content/javascript/stage-4/HoistingPage";
import TDZPage from "../content/javascript/stage-4/TDZPage";
import CallStackPage from "../content/javascript/stage-4/CallStackPage";
import MemoryHeapPage from "../content/javascript/stage-4/MemoryHeapPage";
import GarbageCollectionPage from "../content/javascript/stage-4/GarbageCollectionPage";
import JavaScriptEnginePage from "../content/javascript/stage-4/JavaScriptEnginePage";

// Stage 5 – JavaScript Asynchronous
import AsyncJavaScriptPage from "../content/javascript/stage-5/AsyncJavaScriptPage";

// Stage 6 – Object-Oriented Programming
import ObjectOrientedPage from "../content/javascript/stage-6/ObjectOrientedPage";

// Stage 7 – DOM Manipulation & Events
import DOMStagePage from "../content/javascript/stage-7/DOMStagePage";

// Stage 8 – Browser APIs & Storage
import BrowserAPIsPage from "../content/javascript/stage-8/BrowserAPIsPage";

// Stage 9 – Modules & Security
import ModulesSecurityPage from "../content/javascript/stage-9/ModulesSecurityPage";

// Stage 10 – Advanced Patterns & Architecture
import AdvancedPatternsPage from "../content/javascript/stage-10/AdvancedPatternsPage";

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
    <Route path="/javascript/stage-3/objects" element={<ObjectsPage />} />
    <Route
      path="/javascript/stage-3/object-utilities"
      element={<ObjectUtilitiesPage />}
    />
    <Route
      path="/javascript/stage-3/shallow-deep-copy"
      element={<ShallowDeepCopyPage />}
    />
    <Route path="/javascript/stage-3/arrays" element={<ArraysPage />} />
    <Route
      path="/javascript/stage-3/iteration-methods"
      element={<IterationMethodsPage />}
    />
    <Route
      path="/javascript/stage-3/mutation-methods"
      element={<MutationMethodsPage />}
    />
    <Route
      path="/javascript/stage-3/non-mutating-methods"
      element={<NonMutatingPage />}
    />
    <Route path="/javascript/stage-3/sets" element={<SetsPage />} />
    <Route path="/javascript/stage-3/maps" element={<MapsPage />} />
    <Route
      path="/javascript/stage-3/object-iteration"
      element={<ObjectIterationPage />}
    />
    <Route
      path="/javascript/stage-3/array-iteration"
      element={<ArrayIterationPage />}
    />

    {/* Stage 4 – JavaScript Internals */}
    <Route path="/javascript/stage-4" element={<InternalsPage />} />
    <Route
      path="/javascript/stage-4/execution-context"
      element={<ExecutionContextPage />}
    />
    <Route
      path="/javascript/stage-4/lexical-environment"
      element={<LexicalEnvironmentPage />}
    />
    <Route
      path="/javascript/stage-4/scope-chain"
      element={<ScopeChainPage />}
    />
    <Route path="/javascript/stage-4/hoisting" element={<HoistingPage />} />
    <Route path="/javascript/stage-4/tdz" element={<TDZPage />} />
    <Route path="/javascript/stage-4/call-stack" element={<CallStackPage />} />
    <Route
      path="/javascript/stage-4/memory-heap"
      element={<MemoryHeapPage />}
    />
    <Route
      path="/javascript/stage-4/garbage-collection"
      element={<GarbageCollectionPage />}
    />
    <Route
      path="/javascript/stage-4/js-engine"
      element={<JavaScriptEnginePage />}
    />

    {/* Stage 5 – JavaScript Asynchronous*/}
    <Route path="/javascript/stage-5" element={<AsyncJavaScriptPage />} />

    {/* Stage 6 – Object-Oriented Programming */}
    <Route path="/javascript/stage-6" element={<ObjectOrientedPage />} />

    {/* Stage 7 – DOM Manipulation & Events */}
    <Route path="/javascript/stage-7" element={<DOMStagePage />} />

    {/* Stage 8 – Browser APIs & Storage */}
    <Route path="/javascript/stage-8" element={<BrowserAPIsPage />} />

    {/* Stage 9 – Modules & Security */}
    <Route path="/javascript/stage-9" element={<ModulesSecurityPage />} />

    {/* Stage 10 – Advanced Patterns & Architecture */}
    <Route path="/javascript/stage-10" element={<AdvancedPatternsPage />} />
  </>
);
