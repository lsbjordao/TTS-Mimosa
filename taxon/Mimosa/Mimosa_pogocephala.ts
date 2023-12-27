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


// Description of Mimosa pogocephala
const Mimosa_pogocephala = new Mimosa()
Mimosa_pogocephala.specificEpithet = 'pogocephala'

Mimosa_pogocephala.stems = new Stems()

Mimosa_pogocephala.stipule = new Stipule()
Mimosa_pogocephala.stipule.margin = new MarginStipule()
Mimosa_pogocephala.stipule.adaxial = new AdaxialStipule()
Mimosa_pogocephala.stipule.abaxial = new AbaxialStipule()

Mimosa_pogocephala.leaf = new Leaf()
Mimosa_pogocephala.leaf.petiole = new Petiole()
Mimosa_pogocephala.leaf.bipinnate = new Bipinnate()
Mimosa_pogocephala.leaf.bipinnate.rachis = new Rachis()
Mimosa_pogocephala.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pogocephala.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pogocephala.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pogocephala.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pogocephala.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pogocephala.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pogocephala.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(13)
Mimosa_pogocephala.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 24)
Mimosa_pogocephala.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(30)
Mimosa_pogocephala.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pogocephala.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pogocephala.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pogocephala.inflorescence = new Inflorescence()
Mimosa_pogocephala.inflorescence.peduncle = new Peduncle()
Mimosa_pogocephala.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pogocephala.flower = new Flower()
Mimosa_pogocephala.flower.bracteole = new Bracteole()
Mimosa_pogocephala.flower.merism = '4-merous'
Mimosa_pogocephala.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pogocephala.flower.calyx = new Calyx()
Mimosa_pogocephala.flower.corolla = new Corolla()
Mimosa_pogocephala.flower.corolla.shape = 'funnelform'

Mimosa_pogocephala.androecium = new Androecium()
Mimosa_pogocephala.androecium.filaments = new Filaments()
Mimosa_pogocephala.androecium.filaments.colour = 'pinkish'

Mimosa_pogocephala.ginoecium = new Ginoecium()
Mimosa_pogocephala.ginoecium.ovary = new Ovary()

Mimosa_pogocephala.fruit = new Fruit()
Mimosa_pogocephala.fruit.stipe = new Stipe()
Mimosa_pogocephala.fruit.replum = new Replum()
Mimosa_pogocephala.fruit.epicarp = new Epicarp()

Mimosa_pogocephala.seed = new Seed()


// Description authorship
Mimosa_pogocephala.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pogocephala.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pogocephala
export { Mimosa_pogocephala }