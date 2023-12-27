// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa purpusii
const Mimosa_purpusii = new Mimosa()
Mimosa_purpusii.specificEpithet = 'purpusii'

Mimosa_purpusii.stems = new Stems()

Mimosa_purpusii.stipule = new Stipule()
Mimosa_purpusii.stipule.margin = new MarginStipule()
Mimosa_purpusii.stipule.adaxial = new AdaxialStipule()
Mimosa_purpusii.stipule.abaxial = new AbaxialStipule()

Mimosa_purpusii.leaf = new Leaf()
Mimosa_purpusii.leaf.petiole = new Petiole()
Mimosa_purpusii.leaf.bipinnate = new Bipinnate()
Mimosa_purpusii.leaf.bipinnate.rachis = new Rachis()
Mimosa_purpusii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_purpusii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_purpusii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_purpusii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_purpusii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_purpusii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 31)
Mimosa_purpusii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_purpusii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_purpusii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_purpusii.inflorescence = new Inflorescence()
Mimosa_purpusii.inflorescence.peduncle = new Peduncle()
Mimosa_purpusii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_purpusii.flower = new Flower()
Mimosa_purpusii.flower.bracteole = new Bracteole()
Mimosa_purpusii.flower.merism = '5-merous'
Mimosa_purpusii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_purpusii.flower.calyx = new Calyx()
Mimosa_purpusii.flower.calyx.shape = 'campanulate'
Mimosa_purpusii.flower.corolla = new Corolla()
Mimosa_purpusii.flower.corolla.shape = ['turbinate', 'campanulate']

Mimosa_purpusii.androecium = new Androecium()
Mimosa_purpusii.androecium.filaments = new Filaments()
Mimosa_purpusii.androecium.filaments.colour = 'pinkish'

Mimosa_purpusii.ginoecium = new Ginoecium()
Mimosa_purpusii.ginoecium.ovary = new Ovary()

Mimosa_purpusii.fruit = new Fruit()
Mimosa_purpusii.fruit.stipe = new Stipe()
Mimosa_purpusii.fruit.replum = new Replum()
Mimosa_purpusii.fruit.epicarp = new Epicarp()

Mimosa_purpusii.seed = new Seed()


// Description authorship
Mimosa_purpusii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_purpusii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa purpusii
export { Mimosa_purpusii }