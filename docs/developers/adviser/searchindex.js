Search.setIndex({docnames:["dependency_graph","dependency_monkey","index","integration","libdependency_graph","performance","pipeline","provenance_checks","thoth.adviser","thoth.adviser.python","thoth.adviser.python.dependency_graph","thoth.adviser.python.dependency_graph.adaptation","thoth.adviser.python.dependency_graph.walking","thoth.adviser.python.pipeline","thoth.adviser.python.pipeline.sieves","thoth.adviser.python.pipeline.steps","thoth.adviser.python.pipeline.strides","thoth.adviser.python.pipeline.units"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["dependency_graph.rst","dependency_monkey.rst","index.rst","integration.rst","libdependency_graph.rst","performance.rst","pipeline.rst","provenance_checks.rst","thoth.adviser.rst","thoth.adviser.python.rst","thoth.adviser.python.dependency_graph.rst","thoth.adviser.python.dependency_graph.adaptation.rst","thoth.adviser.python.dependency_graph.walking.rst","thoth.adviser.python.pipeline.rst","thoth.adviser.python.pipeline.sieves.rst","thoth.adviser.python.pipeline.steps.rst","thoth.adviser.python.pipeline.strides.rst","thoth.adviser.python.pipeline.units.rst"],objects:{"thoth.adviser":{cli:[8,0,0,"-"],configuration:[8,0,0,"-"],enums:[8,0,0,"-"],exceptions:[8,0,0,"-"],isis:[8,0,0,"-"],python:[9,0,0,"-"]},"thoth.adviser.enums":{DecisionType:[8,1,1,""],Ecosystem:[8,1,1,""],PythonRecommendationOutput:[8,1,1,""],RecommendationType:[8,1,1,""]},"thoth.adviser.enums.DecisionType":{ALL:[8,2,1,""],RANDOM:[8,2,1,""]},"thoth.adviser.enums.Ecosystem":{PYTHON:[8,2,1,""]},"thoth.adviser.enums.PythonRecommendationOutput":{PIPENV:[8,2,1,""],REQUIREMENTS:[8,2,1,""]},"thoth.adviser.enums.RecommendationType":{LATEST:[8,2,1,""],STABLE:[8,2,1,""],TESTING:[8,2,1,""]},"thoth.adviser.exceptions":{InternalError:[8,3,1,""],NotFound:[8,3,1,""],PipfileParseError:[8,3,1,""],ThothAdviserException:[8,3,1,""],UnsupportedConfiguration:[8,3,1,""],VersionIdentifierError:[8,3,1,""]},"thoth.adviser.isis":{Isis:[8,1,1,""]},"thoth.adviser.isis.Isis":{get_python_package_performance_impact_all:[8,4,1,""],get_python_project_performance_import:[8,2,1,""]},"thoth.adviser.python":{advise:[9,0,0,"-"],builder:[9,0,0,"-"],dependency_graph:[10,0,0,"-"],dependency_monkey:[9,0,0,"-"],digests_fetcher:[9,0,0,"-"],exceptions:[9,0,0,"-"],pipeline:[13,0,0,"-"],solver:[9,0,0,"-"]},"thoth.adviser.python.advise":{Adviser:[9,1,1,""]},"thoth.adviser.python.advise.Adviser":{compute:[9,4,1,""],compute_on_project:[9,4,1,""],compute_using_pipeline:[9,4,1,""],count:[9,2,1,""],limit:[9,2,1,""],recommendation_type:[9,2,1,""]},"thoth.adviser.python.builder":{PipelineBuilder:[9,1,1,""],PipelineConfig:[9,1,1,""]},"thoth.adviser.python.builder.PipelineBuilder":{get_adviser_pipeline_config:[9,4,1,""],get_dependency_monkey_pipeline_config:[9,4,1,""],graph:[9,2,1,""],library_usage:[9,2,1,""],project:[9,2,1,""]},"thoth.adviser.python.builder.PipelineConfig":{sieves:[9,4,1,""],steps:[9,4,1,""],strides:[9,4,1,""]},"thoth.adviser.python.dependency_graph":{adaptation:[11,0,0,"-"],walking:[12,0,0,"-"]},"thoth.adviser.python.dependency_graph.adaptation":{elements:[11,0,0,"-"],exceptions:[11,0,0,"-"],graph:[11,0,0,"-"],transaction:[11,0,0,"-"]},"thoth.adviser.python.dependency_graph.adaptation.elements":{Edge:[11,1,1,""],Node:[11,1,1,""]},"thoth.adviser.python.dependency_graph.adaptation.elements.Edge":{get_edge_key:[11,4,1,""],score:[11,2,1,""],source:[11,2,1,""],target:[11,2,1,""]},"thoth.adviser.python.dependency_graph.adaptation.elements.Node":{all_dependency_package_tuples:[11,4,1,""],all_dependent_package_tuples:[11,4,1,""],all_incoming_edges:[11,4,1,""],all_outgoing_edges:[11,4,1,""],incoming_edges:[11,2,1,""],outgoing_edges:[11,2,1,""],package_tuple:[11,2,1,""]},"thoth.adviser.python.dependency_graph.adaptation.exceptions":{CannotRemovePackage:[11,3,1,""],DependencyGraphAdaptationException:[11,3,1,""],PackageNotFound:[11,3,1,""],RemoveMultiplePackages:[11,3,1,""],TransactionExpired:[11,3,1,""]},"thoth.adviser.python.dependency_graph.adaptation.graph":{DependencyGraph:[11,1,1,""]},"thoth.adviser.python.dependency_graph.adaptation.graph.DependencyGraph":{direct_dependencies_map:[11,2,1,""],edges_map:[11,2,1,""],from_paths:[11,4,1,""],iter_direct_dependencies_tuple:[11,4,1,""],iter_transitive_dependencies_tuple:[11,4,1,""],packages_map:[11,2,1,""],packages_score:[11,2,1,""],perform_transaction:[11,4,1,""],remove_package_tuples:[11,4,1,""],score_package_tuple:[11,4,1,""],sort_paths:[11,4,1,""],to_scored_package_tuple_pairs:[11,4,1,""]},"thoth.adviser.python.dependency_graph.adaptation.transaction":{DependencyGraphTransaction:[11,1,1,""]},"thoth.adviser.python.dependency_graph.adaptation.transaction.DependencyGraphTransaction":{any_positive_score:[11,4,1,""],commit:[11,4,1,""],dependency_graph:[11,2,1,""],iter_package_tuples:[11,4,1,""],rollback:[11,4,1,""],score_summary:[11,4,1,""],to_remove_edges:[11,2,1,""],to_remove_nodes:[11,2,1,""]},"thoth.adviser.python.dependency_graph.walking":{dependency_graph:[12,0,0,"-"]},"thoth.adviser.python.dependency_graph.walking.dependency_graph":{DependenciesCountOverflow:[12,3,1,""],DependencyGraph:[12,1,1,""],DependencyGraphWalkerException:[12,3,1,""],NoDependenciesError:[12,3,1,""],PrematureStreamEndError:[12,3,1,""]},"thoth.adviser.python.dependency_graph.walking.dependency_graph.DependencyGraph":{MAX_DEPENDENCIES_COUNT:[12,2,1,""],STREAM_DELIMITER:[12,2,1,""],STREAM_STOP:[12,2,1,""],stacks_estimated:[12,4,1,""],walk:[12,4,1,""]},"thoth.adviser.python.dependency_monkey":{dependency_monkey:[9,5,1,""],dm_amun_inspect_wrapper:[9,5,1,""]},"thoth.adviser.python.digests_fetcher":{GraphDigestsFetcher:[9,1,1,""]},"thoth.adviser.python.digests_fetcher.GraphDigestsFetcher":{fetch_digests:[9,4,1,""]},"thoth.adviser.python.exceptions":{ConstraintClashError:[9,3,1,""],DirectDependencyRemoval:[9,3,1,""],UnableLock:[9,3,1,""]},"thoth.adviser.python.pipeline":{context_base:[13,0,0,"-"],exceptions:[13,0,0,"-"],pipeline:[13,0,0,"-"],product:[13,0,0,"-"],sieve:[13,0,0,"-"],sieve_context:[13,0,0,"-"],sieves:[14,0,0,"-"],stack_candidates:[13,0,0,"-"],stats_base:[13,0,0,"-"],step:[13,0,0,"-"],step_context:[13,0,0,"-"],step_stats:[13,0,0,"-"],steps:[15,0,0,"-"],stride:[13,0,0,"-"],stride_context:[13,0,0,"-"],stride_stats:[13,0,0,"-"],strides:[16,0,0,"-"],unit_base:[13,0,0,"-"],units:[17,0,0,"-"]},"thoth.adviser.python.pipeline.context_base":{ContextBase:[13,1,1,""]},"thoth.adviser.python.pipeline.context_base.ContextBase":{stats:[13,4,1,""]},"thoth.adviser.python.pipeline.exceptions":{CannotRemovePackage:[13,3,1,""],NotAICoERelease:[13,3,1,""],PackageNotFound:[13,3,1,""],PipelineExceptionBase:[13,3,1,""],StrideRemoveStack:[13,3,1,""]},"thoth.adviser.python.pipeline.pipeline":{Pipeline:[13,1,1,""]},"thoth.adviser.python.pipeline.pipeline.Pipeline":{conduct:[13,4,1,""],get_configuration:[13,4,1,""],get_stack_info:[13,4,1,""],graph_default:[13,4,1,""],solver:[13,4,1,""]},"thoth.adviser.python.pipeline.product":{PipelineProduct:[13,1,1,""]},"thoth.adviser.python.pipeline.product.PipelineProduct":{finalize:[13,4,1,""],justification:[13,2,1,""],project:[13,2,1,""],score:[13,2,1,""]},"thoth.adviser.python.pipeline.sieve":{Sieve:[13,1,1,""]},"thoth.adviser.python.pipeline.sieve.Sieve":{run:[13,4,1,""]},"thoth.adviser.python.pipeline.sieve_context":{SieveContext:[13,1,1,""]},"thoth.adviser.python.pipeline.sieve_context.SieveContext":{from_package_versions:[13,4,1,""],iter_direct_dependencies:[13,4,1,""],iter_direct_dependencies_tuple:[13,4,1,""],packages:[13,2,1,""],remove_package:[13,4,1,""],remove_package_tuple:[13,4,1,""]},"thoth.adviser.python.pipeline.sieves":{os_sieve:[14,0,0,"-"]},"thoth.adviser.python.pipeline.sieves.os_sieve":{OperatingSystemSieve:[14,1,1,""]},"thoth.adviser.python.pipeline.sieves.os_sieve.OperatingSystemSieve":{run:[14,4,1,""]},"thoth.adviser.python.pipeline.stack_candidates":{StackCandidates:[13,1,1,""]},"thoth.adviser.python.pipeline.stack_candidates.StackCandidates":{add:[13,4,1,""],count:[13,2,1,""],direct_dependencies_map:[13,2,1,""],generate_pipeline_products:[13,4,1,""],get_package_version_tuple:[13,4,1,""],input_project:[13,2,1,""],transitive_dependencies_map:[13,2,1,""]},"thoth.adviser.python.pipeline.stats_base":{StatsBase:[13,1,1,""]},"thoth.adviser.python.pipeline.stats_base.StatsBase":{get_duration:[13,4,1,""],log_report:[13,4,1,""],reset_stats:[13,4,1,""],start_time:[13,4,1,""],start_timer:[13,4,1,""]},"thoth.adviser.python.pipeline.step":{Step:[13,1,1,""]},"thoth.adviser.python.pipeline.step.Step":{run:[13,4,1,""]},"thoth.adviser.python.pipeline.step_context":{StepContext:[13,1,1,""]},"thoth.adviser.python.pipeline.step_context.StepContext":{dependency_graph_adaptation:[13,2,1,""],from_paths:[13,4,1,""],iter_all_dependencies:[13,4,1,""],iter_all_dependencies_tuple:[13,4,1,""],iter_direct_dependencies:[13,4,1,""],iter_direct_dependencies_tuple:[13,4,1,""],iter_transitive_dependencies:[13,4,1,""],iter_transitive_dependencies_tuple:[13,4,1,""],packages:[13,2,1,""],remove_package_tuples:[13,4,1,""],score_package_tuple:[13,4,1,""],sort_paths:[13,4,1,""],stats:[13,4,1,""]},"thoth.adviser.python.pipeline.step_stats":{StepStats:[13,1,1,""]},"thoth.adviser.python.pipeline.step_stats.StepStats":{log_report:[13,4,1,""],mark_removed_package_tuple:[13,4,1,""]},"thoth.adviser.python.pipeline.steps":{buildtime_error:[15,0,0,"-"],cve:[15,0,0,"-"],limit_latest_versions:[15,0,0,"-"],observation_reduction:[15,0,0,"-"],prereleases:[15,0,0,"-"],restrict_indexes:[15,0,0,"-"],runtime_error:[15,0,0,"-"],score_cutoff:[15,0,0,"-"],semver_sort:[15,0,0,"-"],toolchain:[15,0,0,"-"],unreachable:[15,0,0,"-"]},"thoth.adviser.python.pipeline.steps.buildtime_error":{BuildtimeErrorFiltering:[15,1,1,""]},"thoth.adviser.python.pipeline.steps.buildtime_error.BuildtimeErrorFiltering":{run:[15,4,1,""]},"thoth.adviser.python.pipeline.steps.cve":{CvePenalization:[15,1,1,""]},"thoth.adviser.python.pipeline.steps.cve.CvePenalization":{PARAMETERS_DEFAULT:[15,2,1,""],run:[15,4,1,""]},"thoth.adviser.python.pipeline.steps.limit_latest_versions":{LimitLatestVersions:[15,1,1,""]},"thoth.adviser.python.pipeline.steps.limit_latest_versions.LimitLatestVersions":{PARAMETERS_DEFAULT:[15,2,1,""],run:[15,4,1,""]},"thoth.adviser.python.pipeline.steps.observation_reduction":{ObservationReduction:[15,1,1,""]},"thoth.adviser.python.pipeline.steps.observation_reduction.ObservationReduction":{PARAMETERS_DEFAULT:[15,2,1,""],run:[15,4,1,""]},"thoth.adviser.python.pipeline.steps.prereleases":{CutPreReleases:[15,1,1,""]},"thoth.adviser.python.pipeline.steps.prereleases.CutPreReleases":{run:[15,4,1,""]},"thoth.adviser.python.pipeline.steps.restrict_indexes":{RestrictIndexes:[15,1,1,""]},"thoth.adviser.python.pipeline.steps.restrict_indexes.RestrictIndexes":{run:[15,4,1,""]},"thoth.adviser.python.pipeline.steps.runtime_error":{RuntimeErrorFiltering:[15,1,1,""]},"thoth.adviser.python.pipeline.steps.runtime_error.RuntimeErrorFiltering":{run:[15,4,1,""]},"thoth.adviser.python.pipeline.steps.score_cutoff":{ScoreCutoff:[15,1,1,""]},"thoth.adviser.python.pipeline.steps.score_cutoff.ScoreCutoff":{PARAMETERS_DEFAULT:[15,2,1,""],run:[15,4,1,""]},"thoth.adviser.python.pipeline.steps.semver_sort":{SemverSort:[15,1,1,""]},"thoth.adviser.python.pipeline.steps.semver_sort.SemverSort":{run:[15,4,1,""]},"thoth.adviser.python.pipeline.steps.toolchain":{CutToolchain:[15,1,1,""]},"thoth.adviser.python.pipeline.steps.toolchain.CutToolchain":{is_toolchain:[15,4,1,""],run:[15,4,1,""]},"thoth.adviser.python.pipeline.steps.unreachable":{CutUnreachable:[15,1,1,""]},"thoth.adviser.python.pipeline.steps.unreachable.CutUnreachable":{run:[15,4,1,""]},"thoth.adviser.python.pipeline.stride":{Stride:[13,1,1,""]},"thoth.adviser.python.pipeline.stride.Stride":{run:[13,4,1,""]},"thoth.adviser.python.pipeline.stride_context":{StrideContext:[13,1,1,""]},"thoth.adviser.python.pipeline.stride_context.StrideContext":{adjust_score:[13,4,1,""],justification:[13,4,1,""],score:[13,4,1,""],stack_candidate:[13,2,1,""]},"thoth.adviser.python.pipeline.stride_stats":{StrideStats:[13,1,1,""]},"thoth.adviser.python.pipeline.stride_stats.StrideStats":{log_report:[13,4,1,""]},"thoth.adviser.python.pipeline.strides":{cve:[16,0,0,"-"],random_decision:[16,0,0,"-"],score_filter:[16,0,0,"-"]},"thoth.adviser.python.pipeline.strides.cve":{CveScoring:[16,1,1,""]},"thoth.adviser.python.pipeline.strides.cve.CveScoring":{PARAMETERS_DEFAULT:[16,2,1,""],run:[16,4,1,""]},"thoth.adviser.python.pipeline.strides.random_decision":{RandomDecision:[16,1,1,""]},"thoth.adviser.python.pipeline.strides.random_decision.RandomDecision":{run:[16,4,1,""]},"thoth.adviser.python.pipeline.strides.score_filter":{ScoreFiltering:[16,1,1,""]},"thoth.adviser.python.pipeline.strides.score_filter.ScoreFiltering":{run:[16,4,1,""]},"thoth.adviser.python.pipeline.unit_base":{PipelineUnitBase:[13,1,1,""]},"thoth.adviser.python.pipeline.unit_base.PipelineUnitBase":{PARAMETERS_DEFAULT:[13,2,1,""],PARAMETERS_SCHEMA:[13,2,1,""],compute_expanded_parameters:[13,4,1,""],get_aicoe_configuration:[13,4,1,""],graph:[13,2,1,""],is_aicoe_release:[13,4,1,""],library_usage:[13,2,1,""],name:[13,4,1,""],parameters:[13,4,1,""],project:[13,2,1,""],run:[13,4,1,""],to_dict:[13,4,1,""],update_parameters:[13,4,1,""]},"thoth.adviser.python.pipeline.units":{cve:[17,0,0,"-"],semver:[17,0,0,"-"]},"thoth.adviser.python.pipeline.units.cve":{get_cve_records:[17,5,1,""]},"thoth.adviser.python.pipeline.units.semver":{semver_cmp_package_version:[17,5,1,""]},"thoth.adviser.python.solver":{GraphReleasesFetcher:[9,1,1,""],PackageVersionDependencyParser:[9,1,1,""],PythonGraphSolver:[9,1,1,""],PythonPackageGraphSolver:[9,1,1,""]},"thoth.adviser.python.solver.GraphReleasesFetcher":{fetch_releases:[9,4,1,""],graph_db:[9,4,1,""]},"thoth.adviser.python.solver.PackageVersionDependencyParser":{parse:[9,4,1,""]},"thoth.adviser.python.solver.PythonPackageGraphSolver":{solve:[9,4,1,""]},thoth:{adviser:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","exception","Python exception"],"4":["py","method","Python method"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:exception","4":"py:method","5":"py:function"},terms:{"abstract":[6,13],"case":[0,2,4,5,6,9,12,15],"class":[5,6,8,9,11,12,13,14,15,16,17],"default":[4,13],"enum":[2,6,9],"final":[6,13],"float":[5,9,11,13],"function":[2,4,6,8,13,15],"import":[5,6,8],"int":[5,9,11,13,17],"new":[4,5,6],"null":5,"public":7,"return":[4,6,9,13],"static":[9,13],"switch":5,"true":[6,9,11,13],"try":[6,9],Adding:6,And:3,For:[2,4,6],NOT:7,Not:6,One:[4,6,13],TLS:7,That:7,The:[0,1,2,3,4,5,6,7,16],There:[0,1,2,7,9,10],These:[1,2,4,6,13,17],With:4,__name__:6,_extendedenum:8,_logger:6,abi:4,abort:6,about:[0,1,6,11],abov:[2,4,5,6],accept:[1,5,6,8,16],access:6,accord:[15,17],account:15,accumul:13,accur:2,accuraci:1,across:1,act:[6,11],actual:[1,2,4,5,6,7,9,10,11],adapt:[4,5,8,9,10,12,13],add:[3,5,6,13],added:6,adding:5,addit:[1,4,5,6,9,15],adjust:[5,6,10,11,13],adjust_scor:[6,13],administr:5,advantag:[0,4],advic:1,advis:[0,1,3,4,5],affect:[6,11,16],after:[1,5,13,15],again:2,against:[0,2,7,16],aggreg:[1,2,9],aico:[5,7,13],aim:[1,6],algorithm:[1,4],alia:9,all:[1,2,4,5,6,8,9,11,13],all_dependency_package_tupl:11,all_dependent_package_tupl:11,all_incoming_edg:11,all_outgoing_edg:11,all_performance_model:5,all_vers:9,alloc:1,allow:[2,6,15],along:1,alreadi:[5,6],also:[0,2,4,5,6,7],alwai:[0,6,15],amun:[0,1,2,4,5,9],analysi:5,analyz:6,ani:[0,1,4,5,7,11,15,16],anoth:[4,6,7],any_positive_scor:11,anymor:7,api:[1,2,3,4,5,7,8,9],app:4,appli:1,applic:[0,2,7,9],apt:1,argument:2,ari:[0,2,4],around:9,arrai:4,artifici:6,ask:[3,4,6],aspect:[1,6],assembl:2,assign:[1,4],atom:6,attribut:6,autom:1,automat:[1,2,5,6],avail:[1,2,3,4,5,6,7,9,15],awai:6,back:[0,4,6,8,9,11],bad:6,bar:6,base:[0,1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17],basic:4,becaus:6,been:[5,11],befor:[3,15],behav:6,behavior:0,behind:6,being:[6,15,16],bellow:[5,6,7,15],below:[2,6],benefit:[4,5],besid:[0,1,6],best:[0,2],better:[0,6],between:[0,4,17],bin:4,binari:0,bind:4,bool:[9,11,13],both:[3,7],bound:[4,12],branch:5,browser:1,bug:8,build:[1,2,4,5,6,7],builder:[6,8],buildtim:15,buildtime_error:[8,9,13],buildtimeerrorfilt:15,built:[2,5,7],cach:[4,8],call:[0,1,2,4,6,8,9,13],callabl:[11,13],callback:6,can:[0,1,2,3,4,5,6,7,10,11,12],cancel:6,candid:[2,6,13],cannot:[2,6,9,11,12,13],cannotremovepackag:[6,11,13],capabl:[0,1,6],captur:[4,5,6],care:0,carri:[5,6,13],cast:6,casu:7,categori:4,caus:6,cento:2,centos7:2,ceph:1,certain:[1,6,10],chain:[4,13],chang:[2,3,5,6,7,10,11],characterist:[1,5,6],check:[4,11,13,15,16],choic:[0,6],chosen:4,clash:9,classmethod:[9,11,13],cli:[0,1,2],client:[6,8],close:12,cluster:[3,4,6],code:[1,2,4,5,8,17],column:15,com:[2,6],combin:[1,2],come:[6,7],comma:[2,7],command:2,commit:[5,6,11],common:[9,13,17],commun:[4,8],compar:17,comparis:7,comparision_func:[11,13],comparison:1,compat:[1,4],complet:6,complex:6,compliant:0,compon:5,comput:[0,1,2,5,7,8,9,11,12,13],compute_expanded_paramet:13,compute_on_project:9,compute_using_pipelin:[6,9],computed_stacks_heap:9,concret:6,conduct:13,config:[3,9],configur:[0,1,3,7,9,13],conform:5,conifgur:2,connect:7,consid:[0,1,6,9,15],consist:6,constraint:[8,9],constraintclasherror:9,construct:[0,4,6,11],constructor:[6,9],consum:[1,3,4],consumpt:4,contain:[1,2,4],container:4,content:2,context:[1,5,6,9,13,15],context_bas:[8,9],contextbas:13,continu:6,control:[0,2],convert:3,copi:4,core:[1,2,9],correctli:2,correspond:[2,11],could:[1,6,12],count:[6,9,13,15],cpu:[1,5,6],creat:[1,2,4],create_schema:5,creation:[4,13],criteria:13,ctype:4,current:[1,4,7,10,11,13],current_nam:13,custom:9,cut:[6,15],cutprereleas:[6,15],cuttoolchain:15,cutunreach:15,cve:[6,8,9,13],cve_pen:[6,15,16],cve_record:6,cvepen:15,cvescor:[6,16],cxxabi_1:4,cycl:[0,4],cyclic:4,danger:7,data:[1,2,6,9],databas:[0,1,2,5,6,9,13,17],debug:6,decis:[8,9],decision_typ:9,decisiontyp:[8,9],dedic:1,def:6,defin:[5,9],definit:9,demand:0,depend:[3,4,5,7,8,9,10,11,12,13,14,15],dependenci:14,dependenciescountoverflow:12,dependency_graph:[6,8,9,13],dependency_graph_adapt:13,dependency_monkei:8,dependency_typ:4,dependencygraph:[11,12,13],dependencygraphadaptationexcept:11,dependencygraphtransact:[11,13],dependencygraphwalkerexcept:12,dependencypars:9,dependneci:2,deploi:[2,4,7],deploy:4,deriv:[1,5],describ:[2,4,5,6],descript:6,deseri:[0,4],design:[2,5,6],desir:[5,6,15],desktop:6,destin:11,detail:[3,6],detect:6,determin:[0,6],dev:5,develop:[2,6,13],devic:5,dgraph:[2,4,9,13,14,15,16,17],dict:[5,8,9,11,13,14,15,16,17],dictionari:[5,6,13],did:[7,8,16],differ:[1,4,6,10,16],differenti:16,digest:9,digests_fetch:8,digestsfetcherbas:9,direct:[2,4,9,11,12,13,14,15],direct_depend:[11,12,13],direct_dependencies_map:[11,13],directdependencyremov:9,directli:[1,2,5,7,8],directori:[3,4,9],disabl:[2,6],discard:[13,15],discoveri:6,discuss:1,disk:0,distinguish:[4,6],distribut:[1,2],dm_amun_inspect_wrapp:9,dnf:1,doabl:2,docker:2,dockerfil:4,document:[2,5,7],doe:[0,1,4,6,7,15,16],done:[0,1,4,5,6,7,9],down:[1,4,15],download:7,downsid:4,dry_run:9,dtype:5,due:[4,6,8,12,13],duplic:16,durat:13,dure:[0,4,5,6,13],dynam:[0,4,9],each:[0,2,4,6,9,13,15],easi:4,easiest:3,easili:2,ecosystem:[0,1,4,8],edg:11,edges_map:11,effici:4,eigher:7,elaps:5,element:[8,9,10],elimin:15,els:6,encapsul:[6,13],encod:13,encount:[4,6,15,16],end:[4,7,12,13],endpoint:[1,5],engin:[1,2,6,8,9],ensur:[6,11],entrypoint:13,environ:[0,1,2,3,5,7],error:[1,6,13,15,16],especi:6,estim:12,evalu:1,even:[1,8],everi:[6,13],exact:5,exactli:7,exampl:[2,3,4,5,6,12],examplesieve1:6,examplesieve2:6,examplestep1:6,examplestride1:6,examplestride2:6,exc:6,except:[0,2,6,10,12],exclud:6,execut:[1,2,4,5,6,13],exist:0,expand:4,expect:7,experi:[2,6],explaind:2,explicitli:[6,7,13,15],explictli:7,expos:[1,4,7,8],fact:[0,4,6],fail:[6,7,13],fallback:7,fals:[6,9],far:12,fast:4,faster:1,featur:6,fed:2,fedora:[1,2],feed:[1,2],feel:2,fetch:9,fetch_digest:9,fetch_releas:9,fetcher:9,fiction:1,field:[6,9],file:[0,3,4,5],filter:[6,9,13,14,15,16],find:[2,3,4,5,6],first:[1,4,6,7,15,16,17],fix:12,float32:5,focus:4,follow:[2,3,4,5,6,7],form:[1,5,6],format:5,found:[3,4,6,7,8,11,13],framework:5,free:2,from:[1,2,3,4,5,6,7,8,9,11,13,15,17],from_package_vers:13,from_path:[11,13],full:[2,4],fulli:[1,4,6],fundament:4,gather:[1,5,6,8],gener:[0,1,2,4,5,8,9,10,11,12,13,15,17],generate_pipeline_product:13,generated_project:9,get:[2,3,4,5,6,8,9,11,13,15],get_adviser_pipeline_config:[6,9],get_aicoe_configur:13,get_configur:13,get_cve_record:[6,17],get_dependency_monkey_pipeline_config:[6,9],get_dur:13,get_edge_kei:11,get_package_version_tupl:13,get_python_package_performance_impact_al:8,get_python_project_performance_import:8,get_stack_info:13,getlogg:6,git:[2,3],github:[2,6],given:[1,2,4,5,6,7,8,9,11,13,14,15,16,17],goal:[1,2],goe:4,good:6,gpu:[3,6],grace:9,graph:[1,2,5,6,8,9,10,12,13,14,15,16,17],graph_db:9,graph_default:13,graph_service_host:2,graph_tls_path:2,graphdatabas:[5,9,13,14,15,16,17],graphdigestsfetch:9,graphreleasesfetch:9,group:[4,6,15],guarante:[1,2,7],guid:[2,3],hand:7,handl:4,happen:[7,12],hardwar:[1,2,3,7],has:[0,2,3,4,5,6,7,11,15,16],hash:0,hat:7,have:[4,5,6,7,12,15,16],head:6,help:[0,2],here:[2,4],heurist:16,hierarchi:[11,12,13],high:1,higher:6,highest:0,hint:7,hit:4,hold:[2,5],horizont:15,host:[2,4],how:[2,3,4,5,6,7],howev:[1,2,7],http:[2,6],idea:4,identifi:[4,8,11],illustr:1,imag:[1,2,3,4],imagin:0,immedi:4,impact:8,implant:6,implement:[0,5,6,7,9,10,12,13,14,15,16],includ:[5,13],incom:[6,11],incoming_edg:11,incorpor:5,index:[0,1,2,4,5,6,7,13,15],indic:[1,2],indirect:13,info:[0,1,2,6,9],inform:[1,4,5,6,7],infrastur:2,inject:5,input:[1,2,6,7],input_project:13,insecur:7,insert:5,insid:[3,5,6,13],inspect:[1,4,9],instal:[0,1,3,4,5,6,7,9],instanc:[0,2,6,7,9,13],instanti:13,instead:[7,8],instruct:3,integ:12,integr:2,intens:2,inter:4,interact:[1,2,6],interfac:[2,9,12],intern:[0,4,12,13],internalerror:8,interpret:6,introduc:[4,6],introduct:6,invalid:[6,8,9,13],invectio:6,ipc:4,ipython:6,is_aicoe_releas:13,is_toolchain:15,isi:2,isis_api_url:8,issu:[2,4,5,6],item:4,iter:[6,8,11,13],iter_:6,iter_all_depend:[6,13],iter_all_dependencies_tupl:13,iter_direct_depend:13,iter_direct_dependencies_tupl:[11,13],iter_package_tupl:11,iter_package_vers:6,iter_transitive_depend:13,iter_transitive_dependencies_tupl:[11,13],its:[1,2,4,6,11,13],itself:0,job:[1,5],json:[1,5,7],jupyt:6,just:[7,9],justif:[4,6,13],kafka:7,keep:[11,13],kei:[4,5,11],kept:13,kera:6,kernel:[1,5],kill:[4,12],know:15,knowledg:[1,2,5,6],known:[6,8],languag:0,larg:2,last:4,later:4,latest:[0,2,6,8,9,15,16,17],latter:16,layer:6,lazili:9,lead:6,leaf:4,learn:2,least:7,leav:11,less:6,let:[1,3,4,5,7],level:[2,8],lib64:4,libdependency_graph:[4,6,12],libdependencygraph:12,librari:[1,2,3,5,9],library_usag:[6,9,13,14,15,16],libstdc:4,like:[0,4,5,6,12],limit:[2,6,9,13,15],limit_latest_vers:[8,9,13],limitlatestvers:15,line:[1,2,9],link:5,list:[1,2,3,4,5,6,7,8,9,11,12,13,17],load:[0,4],local:6,lock:[0,3,6,7,8,9,15],lockfil:9,log:[6,13],log_report:13,logic:[6,13],longer:7,look:[5,6],lot:6,lowercas:5,lstm:6,lstmmodelcheckpointissu:6,made:[1,6],main:[1,2,3,4,6,10],maintain:5,make:[1,2,3,4,13,15],makefil:4,manag:[1,3,5,6,7],manipul:[9,13],manner:4,map:[4,8,13],mark:6,mark_removed_package_tupl:13,master:5,match:[5,7],math:1,matrix:5,matrix_s:5,max_dependencies_count:12,mean:[7,16],meant:[10,17],meanwhil:5,measur:13,mechan:[0,1,4],memori:[0,1,2,4],mention:1,merg:5,messag:6,metadata:[4,5,7],method:[6,9,11],might:[1,3,6,7],million:1,mimic:6,mirror:7,model:6,model_properti:5,modelcheckpoint:6,models_bas:5,modifi:[11,13],modul:2,monkei:[0,4,5,6,8,9],more:[1,2,4,5,6,7,9,15],moreov:4,most:[2,5,6,15],mostli:13,much:[1,4],multipl:[1,3,4,5,6,11],name:[4,5,6,8,9,13,14,15,16],namespac:1,nativ:[1,2],need:[2,4,5,6,8,9],neg:[6,13,16],nest:5,never:15,newer:16,newli:5,next:[4,6,13],nightli:6,node:[0,1,4,6,11,15],nodependencieserror:12,none:[6,8,9,11,12,13,14,15,16],nor:2,notaicoereleas:13,note:[1,4,6,7],notebook:[2,6],notfound:8,noth:[9,11,13,14,15,16],notifi:6,now:[2,4,8],number:[4,5,6,8,9,12,15],numpi:4,object:[1,8,9,11,12,13],observ:[0,1,4,5,6,8,15],observation_reduct:[8,9,13],observationreduct:15,obtain:[4,5,6],occur:4,off:[1,6,9,15],offlin:[0,9],often:2,old:15,older:16,omit:4,onc:[1,5,6,11,13],one:[0,1,4,5,6,7],ones:[5,16],onli:[1,2,6,15,16],onto:[0,1,5],oom:[4,12],open:5,openapi:1,openshift:[1,2,4,7],oper:[0,1,2,4,6,13,14],operatingsystemsiev:14,opt:4,optim:[5,6,7,8],option:[1,3,5,6,7,9,11,13],order:[6,13,16],organ:6,os_siev:[8,9,13],oserror:4,other:[1,5,6,7,10],otherwis:4,our:[4,6],out:[1,4,6,9,13,14,15,16],outgo:11,outgoing_edg:11,output:[1,5,6,7,9],outsid:13,over:[2,6,7,11,13],overal:[5,16],overall_scor:5,overflow:12,overhead:6,own:[4,7],owner:5,pacakg:10,packag:[0,1,4,5,6],package_nam:[6,9],package_tupl:[6,8,11,13,15,17],package_tuple1:6,package_tuple2:6,package_vers:[6,9,13,17],package_version1:17,package_version2:17,packagenotfound:[6,11,13],packages_map:11,packages_removed_count:13,packages_scor:11,packagevers:[6,9,13,17],packageversiondependencypars:9,page:2,pair:[4,11],paragraph:4,parallel:[4,6],param1:6,param:9,paramet:[2,4,5,6,13,14,15,16],parameters_default:[6,13,15,16],parameters_dict:13,parameters_schema:13,parametr:6,pars:[1,9],parser_kwarg:9,part:[1,5,6,15],partial:4,pass:[1,2,13],past:4,path:[2,3,4,11,12,13,15,17],pattern:4,pedant:6,penal:[6,15,16],pend:11,pep:[0,2,7],per:[2,7],perfom:7,perform:[0,1,2,4,6,7,8,9,10,11,13],perform_transact:11,performanceindicatorbas:5,phase:5,pickl:0,piec:6,pimatmul:5,pimodel:5,pin:[1,4],pip3:[2,3],pip:[1,2,4,6],pipe:4,pipelin:[1,2,5,8,9],pipelinebuild:9,pipelineconfig:9,pipelineexceptionbas:13,pipelineproduct:13,pipelineunitbas:13,pipenv:[1,2,3,5,6,7,8],pipfil:[0,1,3,7,8],pipfileparseerror:8,pkg:6,place:[1,3],playbook:2,pleas:5,point:[1,2,7],pool:1,popul:5,posit:[4,6,11,13],possibl:[0,1,2,4,13,16],postpon:13,pre:[1,5,6,15],preced:[6,10,11,13],precomput:9,predict:2,prematur:12,prematurestreamenderror:12,prepar:6,prereleas:[6,8,9,13],prereleases_allow:6,prerequisit:15,present:[1,3,4,5,6,7,15,16],preserv:[15,16,17],previou:[4,5],previous:[0,6],primari:2,primarili:4,primit:9,print:[5,6],priorit:6,procedur:1,process:[4,5,12],prod:5,produc:[1,3,4,6,10,12,15],product:[6,7,8,9],program:0,project2vec:8,project:[0,1,2,6,8,9,13,14,15,16],propag:[5,13],proper:5,properti:[5,6,9,11,12,13],provid:[1,2,4,5,6,12,13,15,16],pull:5,pure:9,purpos:[2,10,17],pypi:[0,7,8],python3:5,python:[0,1,2,4,5,6,7,8],pythongraphsolv:9,pythonpackagegraphsolv:[9,13],pythonpath:[2,5],pythonrecommendationoutput:8,pytorch:5,qualiti:1,queri:[5,6],rais:[6,8,9,11,12,13],random:[6,8,9],random_decis:[8,9,13],randomdecis:16,randomli:16,rate:5,rather:[4,7],raw:[4,6],rdf:5,reach:[4,6],read:4,readi:5,real:1,reason:[2,4,6],recommend:[0,1,3,4,5,7,8,9],recommendation_typ:[6,9],recommendationtyp:[6,8,9],red:7,reduc:[6,8,15],refer:4,regardless:11,rel:6,relat:[0,5,6,9],releas:[5,6,9,13,15],releasesfetch:9,relev:[0,1,4,5,6],remov:[6,7,9,10,11,13,15],remove_packag:13,remove_package_tupl:[6,11,13],remove_package_vers:6,removemultiplepackag:11,rep:5,repo:[1,2,5],report:[1,4,5,6,9,12,13],repositori:[2,3,4,5],repres:[2,4,13],represent:[9,12,13],request:[1,2,5,6,11],requir:[0,1,4,5,6,8,9],reserv:1,reset:13,reset_stat:13,resolut:[0,1,2,4,6,7,9,13],resolv:[0,1,2,6,9,10,15,16],resourc:[1,8],resovl:6,respect:[2,5,6,7,8,11,13,16],rest:1,restrict:2,restrict_index:[8,9,13],restrictindex:15,result:[0,1,4,5,6,8,11],retriev:[4,13,17],reus:[1,2],reusabl:4,revers:[11,13],review:5,roll:[6,11],rollback:11,root:[3,4],rpm:[1,2],run:[1,3,6,7,9,13,14,15,16],runtim:[1,2,5,6,15,16],runtime_environ:9,runtime_error:[8,9,13],runtimeenviron:9,runtimeerrorfilt:15,s2i:[2,7],sai:7,same:[2,4,5,6,7,15,16],sampl:[0,2],scan:[6,7],schedul:[2,6],schema:[5,13],score:[0,2,4,5,6,9,10,11,13,15,16],score_adjust:11,score_cutoff:[8,9,13],score_filt:[8,9,13],score_package_tupl:[11,13],score_summari:11,score_threshold:15,scorecutoff:15,scorefilt:16,script:1,search:2,second:[4,13],section:[4,5,6],secur:6,see:[0,1,2,4,5,6,7,9],seed:[2,9],self:6,semant:6,semantic_vers:6,semver:[8,9,13,15,16],semver_cmp_package_vers:17,semver_sort:[8,9,13],semversort:15,sent:[1,9],sep:2,separ:[2,4,7],sequenc:10,serial:[4,5,13],serv:[10,17],server:4,servic:[0,1,2,3,4,5,8],set:[0,2,6,9,13],setup:[2,6],share:17,ship:4,should:[0,1,4,5,6,7,9,13,15],show:2,shown:[4,6],side:[4,6],siev:[8,9],sieve_context:[6,8,9,14],sievecontext:[6,13,14],significantli:15,similar:17,simpl:[2,7,8],simpli:2,singl:[5,11],size:[4,5,12],skip:6,softwar:[0,1,2,3,4,5,9,10,12,15],solali:2,sole:6,solv:9,solver:[0,8,13],solver_kwarg:9,some:[0,2,5,6,15],some_package_tupl:6,somehow:6,someth:6,sooner:10,sort:[11,13,15,17],sort_path:[11,13],sourc:[0,1,4,5,8,9,11,12,13,14,15,16,17],space:5,span:1,specif:[0,1,2,3,4,5,6,7,13],specifi:[5,7,9],speed:0,spent:[4,5],spot:2,src:4,ssl:7,stabl:[6,8,9],stack:[0,1,2,3,4,5,7,8,9,10,12,13,14,15,16],stack_candid:[6,8,9],stack_info:13,stackcandid:13,stacks_estim:12,stage:5,standalon:4,standard:[1,2],start:[4,13],start_tim:13,stat:13,state:[0,2,4,5,6,7,11,13],station:[2,5,6],statist:13,stats_bas:[8,9],statsbas:13,statu:1,stderr:5,stdout:[5,9],step:[1,5,8,9,17],step_context:[6,8,9,15],step_stat:[8,9],stepcontext:[6,13,15],stepstat:13,stl:4,storag:[2,5,9,13,14,15,16,17],store:[2,6,9],str:[5,6,8,9,11,12,13,14,15,16,17],stream:[1,12],stream_delimit:12,stream_stop:12,stride:[5,8,9,17],stride_context:[6,8,9,16],stride_stat:[8,9],stridecontext:[6,13,16],strideremovestack:[6,13],stridestat:13,structur:[0,1,4,6,7],sub:[6,15],subcommand:1,submit:[1,4],submodul:[2,5,10],subpackag:2,subsequ:[1,2,4,5,6,16],substitut:4,successfulli:6,suffix:2,sugar:[9,13],suggest:7,suit:[2,6],suitabl:6,summari:[3,6,11],suppli:[0,1,5,6,9],support:[1,3,7],suppos:4,sure:[3,4,13,15],swagger:8,symbol:6,sync:5,syntax:[9,13],system:[0,1,6,14],take:6,taken:[2,15],talk:[4,12],target:[1,3,4,6,11],tensorflow:[3,5,6,7],tensorflow_buildinfo:5,tensorflow_usag:6,terminolog:2,test:[1,2,5,6,8],thamo:[2,6],than:[4,6],thei:[4,5,6,10,13,15],them:[0,3,4,5,6,7,15],therei:9,thi:[0,1,2,4,5,6,7,8,9,10,11,12,13,15,16],thing:6,those:1,thoth:[0,1,4,5,6],thoth_adviser_filedump:0,thoth_adviser_no_digest:0,thoth_adviser_subcommand:2,thoth_adviser_warehous:7,thoth_whitelisted_sourc:2,thothadviserexcept:[8,9],thousand:1,three:6,threshold:15,through:2,thu:0,tightli:4,till:13,time:[1,2,4,5,6,7,13],timer:13,tls:2,to_dict:13,to_remove_edg:[6,11],to_remove_nod:[6,11],to_scored_package_tuple_pair:11,to_tupl:6,todo:3,togeth:[2,6],tool:[1,2],toolchain:[8,9,13],top:[4,6,11,13],track:13,traffic:7,transact:[6,8,9,10,13],transactionexpir:11,transit:[2,4,11,13],transitive_dependencies_map:13,transpar:[8,13],travers:[4,6,9,12,15],treat:7,tree:0,tri:7,trigger:[1,5],trust:2,tupl:[4,6,8,9,11,12,13,15,17],turn:[4,5,6,13],two:[0,1,3,4,6,7,10,17],txn:6,txt:3,type:[4,5,8,13],unablelock:9,under:5,underli:4,undesir:9,uniqu:[4,5],unit:[8,9,13],unit_bas:[8,9],unit_start_tim:13,units_run:13,unreach:[8,9,13],unsign:12,unsupport:8,unsupportedconfigur:8,until:[4,6],untouch:11,untrust:2,upcom:[5,6],updat:[5,6],update_paramet:13,upper:12,upstream:[0,6],upto:9,url:[1,2,4,13],usag:9,use:[0,2,3,4,5,6,7,8],used:[0,1,2,3,4,6,7,8,9,13,14,15,16,17],useful:[2,6],user:[1,2,4,5,6,7,12,13,15],uses:[0,4,6,8],using:[0,1,2,4,5,6,9],util:[1,2],valid:[0,1,2,4,6],valu:[4,5],variabl:[0,2,7],vector:6,veri:[1,2,4,6,16],verif:[1,7],verifi:[1,2,5],version:[0,1,2,4,6,8,9,13,14,15,16],versionidentifiererror:8,via:[2,4],virtual:3,visit:9,vulner:6,wai:[2,3,6,15,16],wait:5,walk:[8,9,10,13],walker:10,want:[1,5,6,15],warehous:7,warn:6,web:1,weight:[6,11],well:[2,4,6,7],were:[1,2,4,6,12],what:[0,1,2,6,12],wheel:5,when:[2,4,6,7,9,15],where:[1,3,4,5,6,9],which:[0,1,2,3,4,5,6,7,10,11,12,14,15,16],whitelist:[2,7],whole:[0,4,6],why:[2,6],within:[6,8,13],without:[1,7],word:10,work:[0,6,15],world:1,would:[0,4,5,6,11,12,13],wrap:13,wrapper:[9,13],write:[3,4,9],written:[4,5,6,9],yaml:3,yet:[3,6],yield:4,you:[0,2,3,4,5,6,7],your:[0,2,4,5,7],yum:1},titles:["Dependency Graph","Dependency Monkey Design Document","Thoth Adviser","Integrating with Thoth","Resolver design document","Performance indicators","Stack generation pipeline","Provenance Checks","thoth.adviser package","thoth.adviser.python package","thoth.adviser.python.dependency_graph package","thoth.adviser.python.dependency_graph.adaptation package","thoth.adviser.python.dependency_graph.walking package","thoth.adviser.python.pipeline package","thoth.adviser.python.pipeline.sieves package","thoth.adviser.python.pipeline.steps package","thoth.adviser.python.pipeline.strides package","thoth.adviser.python.pipeline.units package"],titleterms:{"case":1,"enum":8,"static":6,Use:1,about:2,adapt:11,advis:[2,6,8,9,10,11,12,13,14,15,16,17],analysi:6,applic:[3,6],architectur:[1,6],artifact:7,build:3,builder:9,buildtime_error:15,check:[2,7],cli:[3,8],code:6,command:3,configur:[2,6,8],content:[8,9,10,11,12,13,14,15,16,17],context_bas:13,creat:[5,6],creation:6,crossroad:2,cve:[15,16,17],databas:4,depend:[0,1,2,6],dependency_graph:[10,11,12],dependency_monkei:9,deploy:[2,5],design:[1,4],develop:0,differ:7,digests_fetch:9,direct:6,document:[1,4],dynam:6,element:11,environ:6,error:7,exampl:[1,7],except:[8,9,11,13],gener:6,github:3,graph:[0,4,11],hardwar:6,hash:7,implement:[2,4],indic:5,info:7,inform:2,instal:2,integr:3,interfac:3,invalid:7,isi:8,issu:7,jupyt:3,kebechet:3,librari:[4,6],limit_latest_vers:15,line:3,local:2,miss:7,model:5,modul:[8,9,10,11,12,13,14,15,16,17],monkei:[1,2],notebook:3,observation_reduct:15,openshift:3,os_siev:14,overview:1,packag:[2,7,8,9,10,11,12,13,14,15,16,17],perform:5,pipelin:[6,13,14,15,16,17],possibl:7,pre:3,prereleas:15,process:3,product:13,programmat:6,project:3,proven:[2,7],python:[3,9,10,11,12,13,14,15,16,17],queri:4,random_decis:16,recommend:[2,6],regist:5,report:7,requir:3,resolv:4,restrict_index:15,run:[2,5],runtime_error:15,s2i:3,score_cutoff:15,score_filt:16,script:5,semver:17,semver_sort:15,siev:[6,13,14],sieve_context:13,softwar:6,solver:9,sourc:[2,6,7],stack:6,stack_candid:13,stats_bas:13,step:[6,13,15],step_context:13,step_stat:13,stride:[6,13,16],stride_context:13,stride_stat:13,submodul:[8,9,11,12,13,14,15,16,17],subpackag:[8,9,10,13],summari:5,thamo:3,thoth:[2,3,8,9,10,11,12,13,14,15,16,17],toolchain:15,transact:11,type:6,unit:[6,17],unit_bas:13,unreach:15,usag:6,use:1,walk:12,warn:7,write:5,your:3}})