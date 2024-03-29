// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { Flower, Fruit, Leaf, Prickles, Trichomes, Stipule, Inflorescence, Androecium } from '../../characters/v1'
import { Capitate, Filiform, Granular, Peltate, Stellate } from '../../characters/v1/Trichomes'
import { StellateSubsessile, StellateStalked, StellateLepidote } from '../../characters/v1/Trichomes/Stellate'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Pinnae, Rachis } from '../../characters/v1/Leaf/Bipinnate'
import { Rachilla, Paraphillidia, Leaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import { Corolla, Calyx, Bracteole } from '../../characters/v1/Flower'
import { Replum, Epicarp } from '../../characters/v1/Fruit'
import { AbaxialLeaflet, AdaxialLeaflet, MarginLeaflet } from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AbaxialStipule, AdaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Filaments } from '../../characters/v1/Androecium'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa schomburgkii
const Mimosa_schomburgkii = new Mimosa()
Mimosa_schomburgkii.specificEpithet = 'schomburgkii'

Mimosa_schomburgkii.habit = 'tree'

Mimosa_schomburgkii.prickles = new Prickles()
Mimosa_schomburgkii.prickles.are = 'absent'

Mimosa_schomburgkii.trichomes = new Trichomes()
Mimosa_schomburgkii.trichomes.filiform = new Filiform()
Mimosa_schomburgkii.trichomes.filiform.are = 'present'
Mimosa_schomburgkii.trichomes.stellate = new Stellate()
Mimosa_schomburgkii.trichomes.stellate.are = 'present'
Mimosa_schomburgkii.trichomes.stellate.subsessile = new StellateSubsessile()
Mimosa_schomburgkii.trichomes.stellate.subsessile.are = 'present'
Mimosa_schomburgkii.trichomes.granular = new Granular()
Mimosa_schomburgkii.trichomes.granular.are = 'present'

Mimosa_schomburgkii.stipule = new Stipule()
Mimosa_schomburgkii.stipule.margin = new MarginStipule()
Mimosa_schomburgkii.stipule.adaxial = new AdaxialStipule()
Mimosa_schomburgkii.stipule.abaxial = new AbaxialStipule()

Mimosa_schomburgkii.leaf = new Leaf()
Mimosa_schomburgkii.leaf.petiole = new Petiole()
Mimosa_schomburgkii.leaf.petiole.present = true
Mimosa_schomburgkii.leaf.petiole.setLength(3)
Mimosa_schomburgkii.leaf.bipinnate = new Bipinnate()
Mimosa_schomburgkii.leaf.bipinnate.rachis = new Rachis()
Mimosa_schomburgkii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_schomburgkii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(7, 12)
Mimosa_schomburgkii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.paraphillidia.are = 'present'
Mimosa_schomburgkii.leaf.bipinnate.pinnae.paraphillidia.setLength(null)
Mimosa_schomburgkii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 29)
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes = new Trichomes()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.stellate = new Stellate()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.stellate.are = 'present'
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.stellate.subsessile = new StellateSubsessile()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.stellate.subsessile.are = 'present'
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.stellate.stalked = new StellateStalked()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.stellate.stalked.are = 'present or absent'
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.peltate = new Peltate()
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.peltate.are = 'present'

Mimosa_schomburgkii.inflorescence = new Inflorescence()
Mimosa_schomburgkii.inflorescence.peduncle = new Peduncle()
Mimosa_schomburgkii.inflorescence.spicate = new Spicate()

Mimosa_schomburgkii.flower = new Flower()
Mimosa_schomburgkii.flower.merism = '4-merous'
Mimosa_schomburgkii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_schomburgkii.flower.bracteole = new Bracteole()
Mimosa_schomburgkii.flower.calyx = new Calyx()
Mimosa_schomburgkii.flower.calyx.numSepals = 3
Mimosa_schomburgkii.flower.calyx.setLengthMinMax(1, 2)
Mimosa_schomburgkii.flower.calyx.shape = 'campanulate'
Mimosa_schomburgkii.flower.corolla = new Corolla()
Mimosa_schomburgkii.flower.corolla.numPepals = 3
Mimosa_schomburgkii.flower.corolla.setLengthMinMax(2, 3)
Mimosa_schomburgkii.flower.corolla.shape = 'campanulate'
Mimosa_schomburgkii.flower.corolla.trichomes = new Trichomes()
Mimosa_schomburgkii.flower.corolla.trichomes.stellate = new Stellate()
Mimosa_schomburgkii.flower.corolla.trichomes.stellate.lepidote = new StellateLepidote()
Mimosa_schomburgkii.flower.corolla.trichomes.stellate.lepidote.are = 'present'

Mimosa_schomburgkii.androecium = new Androecium()
Mimosa_schomburgkii.androecium.filaments = new Filaments()
Mimosa_schomburgkii.androecium.filaments.colour = 'whitenish'

Mimosa_schomburgkii.fruit = new Fruit()
Mimosa_schomburgkii.fruit.replum = new Replum()
Mimosa_schomburgkii.fruit.replum.shape = 'straight'
Mimosa_schomburgkii.fruit.epicarp = new Epicarp()
Mimosa_schomburgkii.fruit.epicarp.type = 'monospermic'
Mimosa_schomburgkii.fruit.epicarp.margin = 'straight'
Mimosa_schomburgkii.fruit.epicarp.trichomes = new Trichomes()
Mimosa_schomburgkii.fruit.epicarp.trichomes.filiform = new Filiform()
Mimosa_schomburgkii.fruit.epicarp.trichomes.filiform.are = 'present'

// Description authorship
Mimosa_schomburgkii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_schomburgkii.descriptionAuthorship.addAuthor({
    name: 'Lucas Sá Barreto Jordão',
    date: 1692107172
})

// Sources
const source0 = new Source()
source0.sourceType = 'article'
source0.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source0.year = '2018'
source0.title = 'Toward a Census of *Mimosa* (Leguminosae) in the Atlantic Domain, Southeastern Brazil'
source0.journal = 'Systematic Botany'
source0.volume = '43'
source0.number = '1'
source0.pages = '162-197'
Mimosa_schomburgkii.addSource(source0)

/// Trichomes
const source1 = new Source()
source1.sourceType = 'article'
source1.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source1.year = '2020'
source1.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source1.journal = 'Flora'
source1.number = '272'
source1.pages = '151702'
source1.figure = '4D'
source1.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.stellate.subsessile.addSource(source1)

const source2 = new Source()
source2.sourceType = 'article'
source2.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source2.year = '2020'
source2.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source2.journal = 'Flora'
source2.number = '272'
source2.pages = '151702'
source2.figure = '4E'
source2.obtainingMethod = 'opticalMicroscope'
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.stellate.subsessile.addSource(source2)

const source3 = new Source()
source3.sourceType = 'article'
source3.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source3.year = '2020'
source3.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source3.journal = 'Flora'
source3.number = '272'
source3.pages = '151702'
source3.figure = '4F'
source3.obtainingMethod = 'opticalMicroscope'
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.stellate.stalked.addSource(source3)

const source4 = new Source()
source4.sourceType = 'article'
source4.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source4.year = '2020'
source4.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source4.journal = 'Flora'
source4.number = '272'
source4.pages = '151702'
source4.figure = '4G'
source4.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.stellate.stalked.addSource(source4)

const source5 = new Source()
source5.sourceType = 'article'
source5.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source5.year = '2020'
source5.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source5.journal = 'Flora'
source5.number = '272'
source5.pages = '151702'
source5.figure = '4H'
source5.obtainingMethod = 'opticalMicroscope'
Mimosa_schomburgkii.flower.corolla.trichomes.stellate.lepidote.addSource(source5)

const source6 = new Source()
source6.sourceType = 'article'
source6.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source6.year = '2020'
source6.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source6.journal = 'Flora'
source6.number = '272'
source6.pages = '151702'
source6.figure = '4I'
source6.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_schomburgkii.flower.corolla.trichomes.stellate.lepidote.addSource(source6)

const source7 = new Source()
source7.sourceType = 'article'
source7.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source7.year = '2020'
source7.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source7.journal = 'Flora'
source7.number = '272'
source7.pages = '151702'
source7.figure = '9M'
source7.obtainingMethod = 'scanningElectronMicroscope'
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.peltate.addSource(source7)

const source8 = new Source()
source8.sourceType = 'article'
source8.authorship = 'Jordão, L.S.B. & Morim, M.P. & Baumgratz, J.F.A.'
source8.year = '2020'
source8.title = 'Trichomes in *Mimosa* (Leguminosae): Towards a characterization and a terminology standardization'
source8.journal = 'Flora'
source8.number = '272'
source8.pages = '151702'
source8.figure = '9N'
source8.obtainingMethod = 'stereoscope'
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.peltate.addSource(source8)
Mimosa_schomburgkii.leaf.bipinnate.pinnae.leaflet.abaxial.trichomes.stellate.subsessile.addSource(source8)

// Export Mimosa schomburgkii
export { Mimosa_schomburgkii }